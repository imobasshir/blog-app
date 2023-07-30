import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBlogComponent } from './open-blog.component';

describe('OpenBlogComponent', () => {
  let component: OpenBlogComponent;
  let fixture: ComponentFixture<OpenBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenBlogComponent]
    });
    fixture = TestBed.createComponent(OpenBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
