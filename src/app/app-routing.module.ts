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
import { ConsultarVentasComponent } from './components/consultar-ventas/consultar-ventas.component';
//comentario de pruebagit fetch origin

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'menu2', component: Menu2Component },
  { path: 'menu3', component: Menu3Component },
  { path: 'agregarProducto', component: AgregarNuevoComponent },
  { path: 'entradaProducto', component: EntradaProductosComponent },
  { path: 'consultarProducto', component: ConsultarProductoComponent, },
  { path: 'actualizarProducto', component: ActulizarProductoComponent, },
  { path: 'venta', component: PuntoVentaComponent, },
  { path: 'usuarios', component: CrearUsuariosComponent, },
  { path: 'consultarVenta', component: ConsultarVentasComponent, },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
// , canActivate: [ AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
