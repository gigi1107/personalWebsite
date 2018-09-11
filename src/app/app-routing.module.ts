import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbiesComponent} from './app manager/Hobbies/hobbies.component';
import { HomeComponent} from './app manager/home/home.component';
import { AboutMeComponent} from './app manager/About Me/aboutMe.component';
import { ResumeComponent} from './app manager/Resume/resume.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hobbies', component: HobbiesComponent},
  { path: 'about-me', component: AboutMeComponent},
  { path: 'portfolio', component: ResumeComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
