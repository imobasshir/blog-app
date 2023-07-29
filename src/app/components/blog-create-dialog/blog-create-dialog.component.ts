import { DialogRef } from '@angular/cdk/dialog';
import { Component, Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-create-dialog',
  templateUrl: './blog-create-dialog.component.html',
  styleUrls: ['./blog-create-dialog.component.css']
})
export class BlogCreateDialogComponent {
  topics: string[] = [
    'Science',
    'Technology',
    'Politics',
    'Entertainmant',
    'Geo Politics'
  ];

  blogFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private dialogRef: DialogRef<BlogCreateDialogComponent>,
  ) {
    this.blogFormGroup = this.formBuilder.group({
      title: '',
      topics: '',
      content: '',
      refrences: '',
      author: '',
      action: ''
    });
  }

  id: any;

  onSubmit() {
    if (this.blogFormGroup.valid) {
      this.blogService.createBlog(this.blogFormGroup.value).subscribe({
        next: (res: any) => {
          alert('Blog created!');
          this.dialogRef.close();
          this.id = res.id;
          console.log(this.id);
        },
        error: (err: any) => {
          console.log(err);
          this.dialogRef.close();
        },
        complete: () => {
          this.getBlog(this.id);
        }
      });
      // console.log(this.blogFormGroup.value);
    }
  }

  title!: string;
  topic!: string;
  content!: string;

  getBlog(id: number) {
    this.blogService.getABlog(id).subscribe({
      next: (res) => {
        console.log(res);
        this.title = res.title,
          this.topic = res.topics,
          this.content = res.content
      },
      error: (err) => console.log(err),
    });
  }

}
