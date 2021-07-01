import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../../pages/login/login.page.scss','./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
   
  constructor( private modal:ModalController) { }
  @Input() email: string;
  ngOnInit() {}

    close(){
      this.modal.dismiss({
        'dimissed':true
      });
    }
}
