import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributo',
  standalone: true,
  templateUrl: './comp-atributo.component.html',
  styleUrl: './comp-atributo.component.css',
  imports: [CommonModule, FormsModule]
})
export class CompAtributoComponent {

  estilo:string = "enable";
  corDeFundo:string = 'blue';
  corDaLetra:string = 'yellow';
  item:string = '';
  listaItem: string[] = []
  compIsEnable: boolean = false

  trocar() {
    if(this.estilo === "enable") {
      this.estilo = 'disable'
      return
    }
    this.estilo = 'enable'
  }

  adicionar() {
    this.listaItem.push(this.item)
    this.item = ''
  }

}
