import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DonationTipsComponent } from './donation-tips/donation-tips.component';
import { DonarRequestComponent } from './donar-request/donar-request.component';
import { BloodDonarComponent } from './blood-donar/blood-donar.component';
import { CorpDonarComponent } from './corp-donar/corp-donar.component';
import { FilterPipe } from './filter.pipe';
import { AdderComponent } from './adder/adder.component';
import { ShadowDirective } from './shadow.directive';

@NgModule({
  declarations: [
    AppComponent,
    DonationTipsComponent,
    DonarRequestComponent,
    BloodDonarComponent,
    CorpDonarComponent,
    FilterPipe,
    AdderComponent,
    ShadowDirective
  ],
  imports: [
    BrowserModule , FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BloodDonarComponent , CorpDonarComponent]
})
export class AppModule { }
