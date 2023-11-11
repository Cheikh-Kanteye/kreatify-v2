import { Component } from '@angular/core';
import { SERVICES, SERVICES_TYPE } from './services-data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  serviseData: SERVICES_TYPE[] = SERVICES;
}
