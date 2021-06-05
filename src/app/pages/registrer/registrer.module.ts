import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrerPageRoutingModule } from './registrer-routing.module';

import { RegistrerPage } from './registrer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrerPageRoutingModule
  ],
  declarations: [RegistrerPage]
})
export class RegistrerPageModule {}
