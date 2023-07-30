import { Component, Injectable, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BlogService } from 'src/app/services/blog.service';
import { OpenBlogComponent } from '../open-blog/open-blog.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { BlogCreateDialogComponent } from '../blog-create-dialog/blog-create-dialog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
@Injectable({ providedIn: 'root' })
export class BlogComponent implements OnInit, OnChanges {
  constructor(
    private blogSer: BlogService,
    private dialog: MatDialog,
    private snackbar: SnackbarService,
  ) { }

  ngOnInit(): void {
    this.getAllBlog();
  }
  ngOnChanges(): void {
    this.getAllBlog();
  }

  displayedColumns: string[] = [
    'title',
    'topics',
    'content',
    'refrences',
    'author',
    'action'
  ];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  openSnackBar(message: string, action: string) {
    this.snackbar.openSnackBar(message, action);
  }

  getAllBlog() {
    this.blogSer.getAllBlogs().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(res);
      },
      error: (err) => console.log(err),
    })
  }

  editBlog(data: any) {
    const dialogRef = this.dialog.open(BlogCreateDialogComponent, { data });
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.getAllBlog();
          this.openSnackBar('Blog Updated', 'Close');
        }
      },
      error: (err) => console.log(err),
    });
  }

  openBlog(id: any) {
    this.blogSer.getABlog(id).subscribe({
      next: (res) => {
        this.dialog.open(OpenBlogComponent, {
          data: res,
          width: '1000px',
        });
        console.log(res);
      },
      error: (err) => console.log(err),
    });

  }

  deleteBlog(id: any) {
    this.blogSer.deleteBlog(id).subscribe({
      next: (res) => {
        this.getAllBlog();
        this.openSnackBar('Blog Deleted', 'Close');
      },
      error: (err) => console.log(err),
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
