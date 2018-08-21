import {Component, OnInit} from '@angular/core';
import {Alumno} from '../modelos/alumno.model';

@Component({
  selector: 'app-ejarrayobjetos',
  templateUrl: './ejarrayobjetos.component.html',
  styleUrls: ['./ejarrayobjetos.component.css']
})
export class EjarrayobjetosComponent implements OnInit {

  public alumnos: Array<Alumno> = [
    {id: 1, nombre: 'Marti', apellidos: 'Vasquez', ciudad: 'Lima'},
    {id: 2, nombre: 'Jose', apellidos: 'Ramirez', ciudad: 'Pucallpa'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
