import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  email : string='';
  pass : string='';
  constructor(private router :Router,private auth:AuthService,private loading :LoadingController) { }
  
  ngOnInit() {}
  
   async loginForm (){
   
      const load = await this.loading.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
      });
     //await load.present();
     console.log(this.email);
     console.log(this.pass);
     this.router.navigate(['/home']);
     this.auth.getProfile().subscribe(async(user)=>{console.log(user);
     //await load.onDidDismiss();
    })
   }
}
