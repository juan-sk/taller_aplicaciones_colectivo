import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  public generateExcelFile(data: any[]): void {

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    // console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    return excelBuffer;
    // this.saveAsExcelFile(excelBuffer, excelFileName);
  }

}
