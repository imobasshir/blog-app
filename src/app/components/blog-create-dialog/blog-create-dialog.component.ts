import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlogService } from 'src/app/services/blog.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-blog-create-dialog',
  templateUrl: './blog-create-dialog.component.html',
  styleUrls: ['./blog-create-dialog.component.css']
})
export class BlogCreateDialogComponent implements OnInit {
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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: SnackbarService,
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

  ngOnInit(): void {
    this.blogFormGroup.patchValue(this.data);
  }

  id: any;

  onSubmit() {
    if (this.blogFormGroup.valid) {
      if (this.data) {
        this.blogService.updateBlog(this.blogFormGroup.value, this.data.id).subscribe({
          next: (res: any) => {
            this.snackBar.openSnackBar('Blog updated!', 'Close');
            this.dialogRef.close();
          },
          error: (err: any) => {
            console.log(err);
            this.dialogRef.close();
          },
          // complete: () => {
          //   this.getBlog(this.id);
          // }
        });
      } else {
        this.blogService.createBlog(this.blogFormGroup.value).subscribe({
          next: (res: any) => {
            this.snackBar.openSnackBar('Blog created!', 'Close');
            this.dialogRef.close();
            this.id = res.id;
          },
          error: (err: any) => {
            console.log(err);
            this.dialogRef.close();
          },
          // complete: () => {
          //   this.getBlog(this.id);
          // }
        });
      }
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
