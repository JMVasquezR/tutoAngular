import {Component} from '@angular/core';

@Component({
  selector: 'app-fehcaactual',
  template: `<p>El resultado es {{resultado | number: '3.2-2'}}</p>`,
// template: `<p> {{ciudad | lowercase}}, {{hoy | date:'d-M-y'}} a las {{hoy | date: 'H:m  Z'}} </p>
// <app-copyright></app-copyright>`,
// templateUrl: './fechaactual.component.html',
  styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent {
  // hoy = new Date();
  // ciudad: string = 'Lima';
  resultado: number = 1.148;
}
