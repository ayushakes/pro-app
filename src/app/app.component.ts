import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'<app-server></app-server><app-server></app-server>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
