import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { CompAtributoComponent } from "./comp-atributo/comp-atributo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CardComponent, CompAtributoComponent]
})
export class AppComponent {
  title = 'angular-diretivas';
  isAliveAppCard: boolean = true
  appToggle() {
    this.isAliveAppCard = !this.isAliveAppCard
  }
}
