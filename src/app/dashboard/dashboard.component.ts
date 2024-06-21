import { Component } from '@angular/core';
import { AskZoneComponent } from '../ask-zone/ask-zone.component';
import { UploadZoneComponent } from '../upload-zone/upload-zone.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UploadZoneComponent, AskZoneComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
