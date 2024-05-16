//Vamos a importar el decorador component
import { Component } from "@angular/core"; 
//Defnimos una clase
//Para decirle a Angular, que nuestra clase es un componente, tenemos que asignarle un decorador
@Component({ //Para que usemos este componente, tenemos que ir a app.modules.ts e importarlo ahí
    //Colocamos un selector, el cual si detecta en el index, va a aprecer ese componente
    selector: "app-body",//Para que veamos en el navegador, vamos a usar este app-header en app.component.html
    //Luego nuestro template
    templateUrl: './body.component.html'

})
//Exportamos nuestra clase a app.module.ts
export class BodyComponent {
    
    mostrar = true; //Ésta es una bandera que utilizaremos para nuestro ngIf en el html

    mensaje;
    autor;    
    frase: any = {
        mensaje: 'Un gran poder conlleva una gran responsabilidad',
        autor: 'Ben Parker'
    }

    constructor() {
        const {mensaje, autor} = this.frase;
        this.mensaje = mensaje;
        this.autor = autor;
    }

    //El bgFor trabaja con base en arreglos - es decir, un arreglo es lo que el ngFor está esperando para
    //barrerlo
    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
    
}