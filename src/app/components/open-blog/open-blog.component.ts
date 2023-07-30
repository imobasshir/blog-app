import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-open-blog',
  templateUrl: './open-blog.component.html',
  styleUrls: ['./open-blog.component.css']
})
export class OpenBlogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<OpenBlogComponent>,
  ) { }

  close() {
    this.dialog.close();
  }

  showData() {
    console.log(this.data);
  }

}
