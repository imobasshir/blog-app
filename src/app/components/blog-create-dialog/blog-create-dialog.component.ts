import { Component } from '@angular/core';

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
  ]
}
