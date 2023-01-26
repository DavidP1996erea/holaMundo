import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPersonasComponent } from './componentes/tabla-personas/tabla-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,TablaPersonasComponent]
})
export class AppModule { }
