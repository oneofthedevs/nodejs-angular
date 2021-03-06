import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../shared/services/blog.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  id: string;
  newForm: FormGroup;
  priority = [{ val: 1, text: 'Low' }, { val: 2, text: 'Normal' }, { val: 3, text: 'High' }];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private blogService: BlogService) { }

  ngOnInit(): void {
    this.createFrom();
    this.getParamter();
    this.editValues();
  }

  getParamter(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') ? this.activatedRoute.snapshot.paramMap.get('id') : null;
  }

  createFrom(): void {
    this.newForm = this.fb.group({
      _id: [''],
      title: ['', [Validators.required, Validators.minLength(1)]],
      smallDesc: [''],
      description: ['', [Validators.required]],
      userId: ['', [Validators.required]]
    });
  }

  async editValues(): Promise<void> {
    try {
      if (this.id !== null) {
        const data = await this.blogService.fetchSigle(this.id);
        if (data._id !== null || data.message !== 'Not Found') {
          this.newForm.setValue({
            _id: data._id,
            title: data.title,
            description: data.description,
            smallDesc: data.smallDesc,
            userId: data.userId._id
          });
        }
      }
    }
    catch (err) {
      console.error(err);
      this.router.navigate(['add']);
    }
  }

  submit(): void {
    // console.log(this.newForm.value);
    // console.log(this.newForm.valid);
    if (this.newForm.valid) {
      console.log('first if');
      if (this.id !== null) {
        console.log('edit if');
        this.editIt();
      }
      else {
        console.log('add if');
        this.addIt();
      }
    }
  }

  async editIt(): Promise<void> {
    const res = await this.blogService.Put(this.newForm.value, this.id);
    console.log(res);
    if (res.nModified !== 0) {
      this.router.navigate(['']);
    }
  }

  async addIt(): Promise<void> {
    console.log('in Add');
    const res = await this.blogService.Post(this.newForm.value);
    console.log(res);
    if (res._id) {
      this.router.navigate(['']);
    }
  }
}
