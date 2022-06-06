import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-punto-venta',
  templateUrl: './punto-venta.component.html',
  styleUrls: ['./punto-venta.component.css']
})
export class PuntoVentaComponent implements OnInit {

  private httpHeaders = new HttpHeaders({ 'content-type': 'application/json', });
  private URL: string = "http://localhost:7777/ventas/registrar";
  private peticion: any = null;
  public carrito: any[] = [];
  private productos: any = null;
  profileForm = new FormGroup({
    venta: new FormControl(),
  })


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  venta() {
    this.productos = {
      ventascabeceraid: 0,
      productoid: this.profileForm.controls['venta'].value,
      cantidadvendida: 1,
      unidad: "pza",
      monto: 12
    }


    console.log(this.productos.productoid);
    this.agregarArray()
  }

  agregarArray() {
    let cabecera = {
      fechaVenta: 0,
      empresa: "floreria la flor",
      montoTotal: 10,
      detalle:
        this.carrito

    }
    this.carrito.push(this.productos)
    console.log(this.carrito);
    console.log(cabecera);
    



    
    //   this.http.post(`${this.URL}`, cabecera, { headers: this.httpHeaders }).subscribe({
    //     next: (res: any) => {
    //       this.peticion = res;
    //       console.log(this.peticion);

    //       Swal.fire({
    //         icon: 'success',
    //         title: 'La venta se a realizado correctamente',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })

    //     }, error: (error: any) => {
    //       Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'El producto no existe',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })
    //       console.log(error);

    //     }
    //   })
  }


}

