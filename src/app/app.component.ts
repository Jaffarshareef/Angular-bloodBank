import { BloodDonarComponent } from './blood-donar/blood-donar.component';
import { Component } from '@angular/core';
import { CorpDonarComponent } from './corp-donar/corp-donar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  comp = CorpDonarComponent;
}
