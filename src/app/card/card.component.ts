import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [CommonModule]
})
export class CardComponent {
  produtos: string[] = []
  menuType: string = "user"

  constructor() {
    this.produtos = [
      "Banana",
      "Maça",
      "Laranja",
      "Pera",
      "Mamão"
    ]
  }

  remover(index: number) {
    this.produtos.splice(index,1)
  }

  mudarMenu(tipo:string){
    this.menuType = tipo
  }

}
