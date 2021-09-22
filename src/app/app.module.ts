import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ArticleComponent } from './components/article/article.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticleComponent,
    CarruselComponent,
    ListaArticulosComponent,
    EmpleadosComponent,
    EmpleadoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
