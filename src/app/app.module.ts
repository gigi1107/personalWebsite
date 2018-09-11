import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './app manager/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HobbiesComponent} from './app manager/Hobbies/hobbies.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';

import { Router } from '@angular/router';
import {AboutMeComponent} from './app manager/About Me/aboutMe.component';
import {ResumeComponent, SafePipe} from './app manager/Resume/resume.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HobbiesComponent,
    ResumeComponent,
    AboutMeComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// const appRoutes: Routes = [
//   { path: 'app-home', component: HomeComponent },
//   { path: 'app-hobbies',  component: HobbiesComponent },
//   { path: 'app-about-me', component: AboutMeComponent},
//   { path: 'app-resume', component: ResumeComponent},
//   { path: '',
//     redirectTo: '/app-home',
//     pathMatch: 'full'
//   },
// ];
export class AppModule {
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
