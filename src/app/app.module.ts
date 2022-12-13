import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {GatherDataComponent} from './components/gather-data/gather-data.component';
import {ShowDataComponent} from './components/show-data/show-data.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'sort', component: MainPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GatherDataComponent,
    ShowDataComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
