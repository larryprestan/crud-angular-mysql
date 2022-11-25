import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { CrearusuarioComponent } from './crearusuario/crearusuario.component';
import { EditarusuarioComponent } from './editarusuario/editarusuario.component';
import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    CrearusuarioComponent,
    EditarusuarioComponent,
    ListadousuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
