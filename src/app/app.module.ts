import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PrimeiroTesteComponent} from './primeiro-teste/primeiro-teste.component';
import { SegundoTesteComponent } from './segundo-teste/segundo-teste.component';
import {ServiceService} from './segundo-teste/service.service';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroTesteComponent,
    SegundoTesteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
