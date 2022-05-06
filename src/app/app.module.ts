import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TasksfinitiComponent } from './pages/tasksfiniti/tasksfiniti.component';

const routes: Route [] = [
  {
     path: '',
     component:HomeComponent
  },
  {
    path:'tasksfiniti',
    component:TasksfinitiComponent

  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksfinitiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
