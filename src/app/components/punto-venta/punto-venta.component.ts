import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
import { LogiService } from 'src/app/services/logi.service';

@Component({
  selector: 'app-punto-venta',
  templateUrl: './punto-venta.component.html',
  styleUrls: ['./punto-venta.component.css']
})
export class PuntoVentaComponent implements OnInit {

  private httpHeaders = new HttpHeaders({ 'content-type': 'application/json', });
  private URL: string = "http://localhost:7777/ventas/registrar";
  private peticion: any = null;
  private cabecera: any = null;
  public carrito: any = []
  public respuesta: any = [];
  public resultado: any=[];
  private productos: any = {
    ventascabeceraid: 0,
    productoid: 0,
    cantidadvendida: 0,
    unidad: "",
    monto: 0
  };
  profileForm = new FormGroup({
    id: new FormControl(),
  })


  constructor(private http: HttpClient, private api: LogiService) { }

  ngOnInit(): void {
    this.api.getConsulta().subscribe((resp: any) => {
      this.respuesta = resp;

      console.log(this.respuesta);
      //  console.log( resp.data[0].id);

    })
  }


  // this.respuesta.filter((ele:any)=> ele.data[i].id==this.profileForm.controls['id'].value)

  venta() {
    this.productos = {
      ventascabeceraid: 0,
      productoid: this.profileForm.controls['id'].value,
      cantidadvendida: 1,
      unidad: "pza",
      monto: 12
    }

    this.resultado = this.respuesta.data.filter((war: any) => war.id == this.productos.productoid)
    console.log(this.resultado);

    this.carrito.push(this.productos)

    this.cabecera = {
      fechaVenta: 0,
      empresa: "floreria la flor",
      montoTotal: 10,
      detalle:
        this.carrito

    }


    // console.log(this.carrito);
    console.log(this.cabecera);
  }

  pagar() {
    this.http.post(`${this.URL}`, this.cabecera, { headers: this.httpHeaders }).subscribe({
      next: (res: any) => {
        this.peticion = res;
        console.log(this.peticion);

        Swal.fire({
          icon: 'success',
          title: 'La venta se a realizado correctamente',
          showConfirmButton: false,
          timer: 1500
        })

      }, error: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ah ocurrido un error',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(error);

      }
    })
  }


}

