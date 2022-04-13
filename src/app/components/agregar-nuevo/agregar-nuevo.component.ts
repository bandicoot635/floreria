import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-agregar-nuevo',
  templateUrl: './agregar-nuevo.component.html',
  styleUrls: ['./agregar-nuevo.component.css']
})
export class AgregarNuevoComponent implements OnInit {

  private httpHeaders = new HttpHeaders({ 'content-type': 'application/json', });
  private URL: string = "http://localhost:7777/productos/crear ";
  private peticion: any = null;
  datos = {
    nombre: "",
    precio: 0,
    stock: 0
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  agregarProducto(nombre: string, precio: string, stock: string): any {
    this.datos.nombre = nombre,
      this.datos.precio = parseFloat(precio),
      this.datos.stock = parseFloat(stock)
    this.http.post(`${this.URL}`, this.datos, { headers: this.httpHeaders }).subscribe((res: any) => {
      this.peticion = res;
      console.log(this.peticion);
    })

  }

}
