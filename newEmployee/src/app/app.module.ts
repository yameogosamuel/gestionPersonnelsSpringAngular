import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ChercherComponent } from './chercher/chercher.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { EditerComponent } from './editer/editer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChercherComponent,
    AjouterComponent,
    EditerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
