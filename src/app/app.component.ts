import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogCreateDialogComponent } from './components/blog-create-dialog/blog-create-dialog.component';
import { FirstService } from './services/first.service';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-app';
  constructor(
    private dialog: MatDialog,
    private first: FirstService,
    private blogComp: BlogComponent
  ) { }

  openDialog() {
    // this.dialog.open(BlogCreateDialogComponent);
    const dialogRef = this.dialog.open(BlogCreateDialogComponent);
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.blogComp.getAllBlog();
        }
      },

      error: (err) => console.log(err),
    });
  }


}
