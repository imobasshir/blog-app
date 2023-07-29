import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogCreateDialogComponent } from '../blog-create-dialog/blog-create-dialog.component';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent {
  constructor(
    private dialog: MatDialog
  ) { }

  openDialog() {
    this.dialog.open(BlogCreateDialogComponent);
  }
}
