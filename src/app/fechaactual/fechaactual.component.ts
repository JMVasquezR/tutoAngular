import {Component} from '@angular/core';

@Component({
  selector: 'app-fehcaactual',
  templateUrl: './fechaactual.component.html',
  styleUrls: ['./fechaactual.component.css']
})

export  class FechaactualComponent {
  hoy = new Date();
}
