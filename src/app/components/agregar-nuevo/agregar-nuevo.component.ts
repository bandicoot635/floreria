import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-nuevo',
  templateUrl: './agregar-nuevo.component.html',
  styleUrls: ['./agregar-nuevo.component.css']
})
export class AgregarNuevoComponent implements OnInit {

  private httpHeaders = new HttpHeaders({ 'content-type': 'application/json', });
  private URL: string = "http://localhost:7777/productos/crear ";
  public forma!: FormGroup;
  private peticion: any = null;
  datos = {
    id:0,
    nombre: "",
    precio: 0,
    stock: 0
  }

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.crearFormulario()
  }

  ngOnInit(): void {
  }

  agregarProducto(ID:string, nombre: string, precio: string, stock: string): any {
    this.datos.id=parseFloat(ID),
    this.datos.nombre = nombre,
      this.datos.precio = parseFloat(precio),
      this.datos.stock = parseFloat(stock)
      
    this.http.post(`${this.URL}`, this.datos, { headers: this.httpHeaders }).subscribe((res: any) => {
      this.peticion = res;
      console.log(this.peticion);
    })
  }

  crearFormulario() {
    this.forma = this.fb.group({
      ID: ['', Validators.required],
      nombre: ['', [Validators.required]],
      precio: ['', Validators.required],
      stock: ['', Validators.required]
    })
  }

  guardar() {
    console.log(this.forma);

    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }
  }

  get IDValido() {
    return this.forma.get('ID')?.invalid && this.forma.get('ID')?.touched
  }

  get precioValido() {
    return this.forma.get('precio')?.invalid && this.forma.get('precio')?.touched
  }

  get nombreValido() {
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  }

  get stockValido() {
    return this.forma.get('stock')?.invalid && this.forma.get('stock')?.touched
  }
}
