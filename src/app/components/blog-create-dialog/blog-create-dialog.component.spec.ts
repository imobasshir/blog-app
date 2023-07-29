import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreateDialogComponent } from './blog-create-dialog.component';

describe('BlogCreateDialogComponent', () => {
  let component: BlogCreateDialogComponent;
  let fixture: ComponentFixture<BlogCreateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCreateDialogComponent]
    });
    fixture = TestBed.createComponent(BlogCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
