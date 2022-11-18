import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class SaveFileService {

  constructor() { }

  public save(buffer: any, fileName: string, type: any): void {
    const data: Blob = new Blob([buffer], {
      type: type
    });
    FileSaver.saveAs(data, fileName);
  }
}
