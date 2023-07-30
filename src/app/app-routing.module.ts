import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { FirstComponent } from './components/first/first.component';
import { UserBlogComponent } from './components/user-blog/user-blog.component';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'first', component: FirstComponent },
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { 
    path: 'admin-blog', 
    component: BlogComponent,
    canActivate: [AdminGuard],
  },
  { path: 'blog', component: UserBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
