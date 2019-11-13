import { Component } from '@angular/core';
import { BackendIntegratorService } from './services/backend-integrator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invillia-frontend';
  items = [];

  constructor(integrator: BackendIntegratorService) {}
}
