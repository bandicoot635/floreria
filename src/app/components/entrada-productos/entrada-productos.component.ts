import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-entrada-productos',
  templateUrl: './entrada-productos.component.html',
  styleUrls: ['./entrada-productos.component.css']
})
export class EntradaProductosComponent implements OnInit {

  public forma!: FormGroup;
  private httpHeaders = new HttpHeaders({ 'content-type': 'application/json', });
  private peticion: any = null;
  private URL: string = "http://localhost:7777/entradas/crear";
  public datos = {
    productoid: 0,
    proveedor: "",
    cantidadsurtida:0,
  }

  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.crearFormulario()
  }

  ngOnInit(): void {
  }

  agregarProducto(id:string, proveedor:string, cantidad:string): any {
    this.datos.productoid = parseFloat(id),
      this.datos.proveedor = proveedor,
      this.datos.cantidadsurtida = parseFloat(cantidad)
    
      this.http.post(`${this.URL}`, this.datos, { headers: this.httpHeaders }).subscribe((res: any) => {
        this.peticion = res;

        if(this.peticion.error==null){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Los datos han sido guardados',
            showConfirmButton: false,
            timer: 1500
          })
         }

        else if(this.peticion.estatus==false){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo ha salido mal',
            showConfirmButton: false,
            timer: 1500
          })
        }

        console.log(this.peticion.error);
        console.log(this.peticion);
      })
  }

  crearFormulario() {
    this.forma = this.fb.group({
      productoid: ['', [Validators.required]],
      proveedor: ['', Validators.required],
      cantidadsurtida: ['', Validators.required]
    })
  }

  guardar() {
    // console.log(this.forma);

    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }
  }

  get idValido() {
    return this.forma.get('productoid')?.invalid && this.forma.get('productoid')?.touched
  }

  get proveedorValido() {
    return this.forma.get('proveedor')?.invalid && this.forma.get('proveedor')?.touched
  }
  get cantidadValido() {
    return this.forma.get('cantidadsurtida')?.invalid && this.forma.get('cantidadsurtida')?.touched
  }


}
