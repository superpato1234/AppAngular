import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  private nombre:string = "Juan";
  edad:number = 32;
  empresa:string = "Ninguna";
  empresad:string = "";

  getNombre(){
    return this.nombre;
  }

  setEmpresad(empresa:string){
    this.empresad=empresa;
    console.log(this.empresad)
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    console.log("Cambio");
  }
}
