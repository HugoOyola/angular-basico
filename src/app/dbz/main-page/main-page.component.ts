import { Component } from '@angular/core';

import { Personaje } from '../interface/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  nuevo:Personaje={
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor(){

  }
}
