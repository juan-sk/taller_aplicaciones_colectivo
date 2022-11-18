import { Component, OnInit } from '@angular/core';
import { InformeService } from 'src/app/services/informe.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  constructor(private informeService: InformeService) { }

  ngOnInit(): void {
  }

  informe1() {
    let contenidoInforme = this.informeService.getInforme1();
    this.descargarIndorme(contenidoInforme);
  }
  informe2() {
    let contenidoInforme = this.informeService.getInforme2();
    this.descargarIndorme(contenidoInforme);
  }
  descargarIndorme(informe: any) {

  }

}
