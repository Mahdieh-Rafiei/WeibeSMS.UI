import {Routes} from '@angular/router';
import {LoginComponent} from './app/login/login.component';
import {DashboardComponent} from './app/dashboard/dashboard.component';

export const APP_ROUTES: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'stories', component: StoryListComponent},
  // {path: 'blogs', component: BlogListComponent},
  // {path: 'educations', component: EducationListComponent},
  // {path: 'comments', component: CommentListComponent},
  // {path: 'notfound', component: NotFoundComponent},
  // {path:'news/:id',component:ProductDetailComponent},
  // {path:'product/:id/edit',component:ProductEditComponent},

  // route default, bayad akhar neveshte beshe, monaseb baraye 404
  {path: '**', redirectTo: 'notfound'}
];
