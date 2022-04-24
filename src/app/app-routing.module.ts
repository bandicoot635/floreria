import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { AgregarNuevoComponent } from './components/agregar-nuevo/agregar-nuevo.component';
import { ConsultarProductoComponent } from './components/consultar-producto/consultar-producto.component';
import { PuntoVentaComponent } from './components/punto-venta/punto-venta.component';
import { AuthGuard } from './guards/auth.guard';
import { EntradaProductosComponent } from './components/entrada-productos/entrada-productos.component';
import { ActulizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { CrearUsuariosComponent } from './components/crear-usuarios/crear-usuarios.component';
import { Menu3Component } from './components/menu3/menu3.component';
//comentario de prueba
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent, canActivate: [ AuthGuard]},
  { path: 'menu2', component: Menu2Component, canActivate: [ AuthGuard] },
  { path: 'menu3', component: Menu3Component, canActivate: [ AuthGuard]},
  { path: 'agregarProducto', component: AgregarNuevoComponent, canActivate: [ AuthGuard] },
  { path: 'entradaProducto', component: EntradaProductosComponent, canActivate: [ AuthGuard] },
  { path: 'consultarProducto', component: ConsultarProductoComponent, canActivate: [ AuthGuard]},
  { path: 'actualizarProducto', component: ActulizarProductoComponent, canActivate: [ AuthGuard] },
  { path: 'puntoVenta', component: PuntoVentaComponent, canActivate: [ AuthGuard] },
  { path: 'Usuarios', component: CrearUsuariosComponent, canActivate: [ AuthGuard]},
 
  { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
