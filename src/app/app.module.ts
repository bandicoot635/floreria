import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';

import { FormsModule } from '@angular/forms';
import { Menu2Component } from './components/menu2/menu2.component';
import { AgregarNuevoComponent } from './components/agregar-nuevo/agregar-nuevo.component';
import { ConsultarProductoComponent } from './components/consultar-producto/consultar-producto.component';
import { PuntoVentaComponent } from './components/punto-venta/punto-venta.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EntradaProductosComponent } from './components/entrada-productos/entrada-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    Menu2Component,
    AgregarNuevoComponent,
    ConsultarProductoComponent,
    PuntoVentaComponent,
    EntradaProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
