import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private blogSer: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  data!: Array<any>;

  getBlogs(): any {

    this.blogSer.getAllBlogs().subscribe({
      next: (res) => {
        console.log(res);
        this.data = res;
        
        // console.log(this.data[0]);

      },
      error: (err) => console.log(err),
    });
  }
}
