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
  priority = [{ val: 1, text: 'Low' }, { val: 2, text: 'Normal' }, { val: 3, text: 'High' },]
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
      title: ['', [Validators.required, Validators.minLength(1)]],
      // description: ['', []],
      priority: [null, [Validators.required]],
      completed: [false, []],
    });
  }

  async editValues(): Promise<void> {
    try {
      if (this.id !== null) {
        const data = await this.blogService.fetchSigle(this.id);
        console.log(data);
        if (data._id !== null || data.message !== 'Not Found') {
          this.newForm.setValue({
            title: data.title,
            // description: data.description || '',
            priority: data.priority,
            completed: data.completed,
          });
        }
      }
    }
    catch (err) {
      console.log(err);
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
