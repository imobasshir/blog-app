import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogCreateDialogComponent } from './components/blog-create-dialog/blog-create-dialog.component';
import { FirstService } from './services/first.service';

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
  ) { }

  openDialog() {
    this.dialog.open(BlogCreateDialogComponent);
  }
}
