
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DocumentListComponent } from './document-list/document-list.component';




@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
