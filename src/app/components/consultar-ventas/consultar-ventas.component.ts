import { Component, OnInit } from '@angular/core';
import { LogiService } from 'src/app/services/logi.service';

@Component({
  selector: 'app-consultar-ventas',
  templateUrl: './consultar-ventas.component.html',
  styleUrls: ['./consultar-ventas.component.css']
})
export class ConsultarVentasComponent implements OnInit {
  // /ventas/consultar
  public respuesta: any[] = []

  constructor(private api: LogiService) { }

  ngOnInit(): void {

    this.api.getConsultarVenta().subscribe((resp: any) => {
      this.respuesta = resp;
      console.log(this.respuesta)
    })
  }

}
