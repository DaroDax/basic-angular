import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //Al usar el input avisas q vienen del componente 
 // @Input() personajes: Personaje[] = [];

 get personajes(){
  return this.dbzService.personajes;  
}
  
  //Inyectando el servicio
  constructor(private dbzService: DbzService) { 

  }
}
