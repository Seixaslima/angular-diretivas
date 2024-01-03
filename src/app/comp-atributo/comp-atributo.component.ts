import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributo',
  standalone: true,
  templateUrl: './comp-atributo.component.html',
  styleUrl: './comp-atributo.component.css',
  imports: [CommonModule]
})
export class CompAtributoComponent {

  estilo:string = "enable"

  trocar() {
    if(this.estilo === "enable") {
      this.estilo = 'disable'
      return
    }
    this.estilo = 'enable'
  }

}
