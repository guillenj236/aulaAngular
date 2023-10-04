import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './app/index/index.component';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { MenuComponent } from './app/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PessoaslistComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
