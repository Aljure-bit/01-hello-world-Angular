//Vamos a importar el decorador component
import { Component } from "@angular/core"; 
//Defnimos una clase
//Para decirle a Angular, que nuestra clase es un componente, tenemos que asignarle un decorador
@Component({ //Para que usemos este componente, tenemos que ir a app.modules.ts e importarlo ahí
    //Colocamos un selector, el cual si detecta en el index, va a aprecer ese componente
    selector: "app-header",//Para que veamos en el navegador, vamos a usar este app-header en app.component.html
    //Luego nuestro template
    templateUrl: './header.component.html'

})
//Exportamos nuestra clase a app.module.ts
export class HeaderComponent {

}