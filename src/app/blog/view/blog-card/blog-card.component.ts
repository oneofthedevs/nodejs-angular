import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../../shared/models/blog';
import { BlogService } from '../../../shared/services/blog.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() BlogItem: Blog;

  @Output() fetchAll: EventEmitter<any> = new EventEmitter();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  async deleteItem(event: Event) {
    event.stopPropagation();
    if (confirm('You sure wanna delete?')) {
      const res = await this.blogService.Delete(this.BlogItem._id);
      this.fetchAll.emit(null);
      console.log(res);
    }
  }
}
