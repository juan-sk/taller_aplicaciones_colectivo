import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel/excel.service';
import { InformeService } from 'src/app/services/informe/informe.service';
import { SaveFileService } from 'src/app/services/save-file/save-file.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  constructor(
    private informeService: InformeService,
    private excelService: ExcelService,
    private saveFileService: SaveFileService
  ) { }

  ngOnInit(): void {
  }

  informe1() {
    let contenidoInforme = this.informeService.getInforme1().subscribe({
      next: (v) => {

        this.descargarInforme(v.listaViajesPasajeros, "Reporte_viajes_y_pasajeros");

      },
      error: (e) => console.log({ e }),
      complete: () => console.log("completado")
    });
    // this.descargarInforme(contenidoInforme);
  }
  informe2() {
    let contenidoInforme = this.informeService.getInforme2().subscribe({
      next: (v) => {

        this.descargarInforme(v.listaViajesPasajeros, "Reporte_viajes_y_pasajeros_por_conductor");

      },
      error: (e) => console.log({ e }),
      complete: () => console.log("completado")
    });
  }

  descargarInforme(contenidoInforme: any, nombreInfomre: string) {
    let formatoExcel = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    let archivoExcel = this.excelService.generateExcelFile(contenidoInforme)
    this.saveFileService.save(archivoExcel, nombreInfomre + '.xlsx', formatoExcel);
  }

}
