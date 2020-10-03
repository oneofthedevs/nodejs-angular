import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../shared/services/blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  blogList: object[];
  ngOnInit(): void {
    this.FetchAllItems();
  }

  // tslint:disable-next-line: typedef
  async FetchAllItems() {
    const items = await this.blogService.fetchAll();
    this.blogList = items;
  }

}
