import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejdirectivaswich',
  templateUrl: './ejdirectivaswich.component.html',
  styleUrls: ['./ejdirectivaswich.component.css']
})
export class EjdirectivaswichComponent implements OnInit {

  jugadores: any[] = [
    {nombre: 'Paolo Guerrero', equipo: 'Flamenco'},
    {nombre: 'Michael Jordan', equipo: 'Chicago Bulls'},
    {nombre: 'Larry Bird', equipo: 'Boston Celtics'},
    {nombre: 'Kareem Abdul Jabbar', equipo: 'Flamenco'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
