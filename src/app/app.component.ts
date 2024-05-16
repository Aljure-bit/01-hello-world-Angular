import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //En este caso, mandaremos dos variables a nuestro html para que se muestren
  nombre: string = "Fernando"; 
  apellido: string = "Hernandez";

}
