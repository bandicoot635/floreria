import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LogiService } from 'src/app/services/logi.service';


@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.css']
})
export class ConsultarProductoComponent implements OnInit {

  public i: number = 0
  public nuevo: any[] = []
  public respuesta: any = {
    status: true,
    mensaje: "",
    data: {
      id: 0,
      nombre: "",
      precio: 0,
      stock: 0
    },
    error: null
  }

  constructor(private http: HttpClient, private api: LogiService) { }

  ngOnInit(): void {
    this.api.getConsulta().subscribe((resp: any) => {
      this.respuesta = resp;
      console.log(this.respuesta)

      for (this.i = 0; this.i < this.respuesta.data.length; this.i++) {
        this.nuevo[this.i] = this.respuesta.data[this.i]
      }
    })
    console.log(this.nuevo)

  }


}
