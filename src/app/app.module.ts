import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisListComponent
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroListComponent,
    data:
          {
            title:
            'Heroes List'
          }
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true // <-- debugging purposes only
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
