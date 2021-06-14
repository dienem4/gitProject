import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import { ForgotPasswordComponent } from 'src/app/modals/forgot-password/forgot-password.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  email : string='';
  pass : string='';
   
  isErrorMail : boolean = true;

  constructor(private storage: NativeStorage,
     private modal : ModalController ,
     private router :Router,
     private auth:AuthService,
     private loading :LoadingController,
     private platform : Platform
     ) { }

  
  ngOnInit() {}

  async forgotPassword() {
    const modal = await this.modal.create({
      component: ForgotPasswordComponent,
    });
    return await modal.present();
  }
  
  checkEmail() {
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    this.isErrorMail = (regex.test(this.email ))? false : true ;
  }

   async loginForm (){
   
      const load = await this.loading.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
      });
      await load.present();
       this.auth.login(this.email,this.pass).then(async(user:any)=>{
        console.log(this.platform.platforms());
        if(this.platform.is("desktop")){

          localStorage.setItem('token',user.token)
          localStorage.setItem('user',JSON.stringify(user.user))
        } else{

           await this.storage.setItem('token',user.token)
           await this.storage.setItem('user',JSON.stringify(user.user))
         
        }

        await this.loading.dismiss();
        this.router.navigate(['/home']);
      }).catch(async()=> {
          this.email=''
          this.pass=''
          this.isErrorMail=true;
          await this.loading.dismiss();
      })
   }
}
