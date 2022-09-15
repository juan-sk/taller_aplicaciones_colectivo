import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-switch',
  templateUrl: './button-switch.component.html',
  styleUrls: ['./button-switch.component.css']
})
export class ButtonSwitchComponent implements OnInit {

  constructor() { }
  @Output() estado: EventEmitter<boolean> = new EventEmitter<boolean>();
  estadoInterno: boolean = false;
  ngOnInit(): void {
  }


  on() {
    console.log("on")
    this.estadoInterno = true;
    this.estado.emit(true);
  }
  off() {
    console.log("oFF")
    this.estadoInterno = false;
    this.estado.emit(false)
  }
}
