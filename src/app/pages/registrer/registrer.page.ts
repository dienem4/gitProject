import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { from } from 'rxjs';
import { ForgotPasswordComponent } from 'src/app/modals/forgot-password/forgot-password.component';
import{UserRegistrer}from'../../interfaces/user-registrer';


@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.page.html',
  styleUrls: ['../login/login.page.scss','/registrer.page.scss'],
})


export class RegistrerPage implements OnInit {

        user :UserRegistrer={firstName:'',lastName:'',phone:'',email:'',password:'',confirmPassword:''};
        isErrorMail : boolean=true;
        isErrorPhone :boolean=true;
  constructor( private camera: Camera) { }

  ngOnInit() { }

  checkEmail() {
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    this.isErrorMail = (regex.test(this.user.email ))? false : true ;
  }
  checkPhone() {
    const regex = new RegExp( /^((\+)33|0|0033)[1-9](\d{2}){4}$/g);
    this.isErrorPhone = (regex.test(this.user.phone ))? false : true ;
  }
    

  registrer(){
      this.user.username=this.user.email.split('@')[0];
      console.dir(this.user);
  }
       uploadPicture (){
       const options: CameraOptions = {
       quality: 100,
       destinationType: this.camera.DestinationType.FILE_URI,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI 
 // If it's base64 (DATA_URL):
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 alert(imageData)
}, (err) => {
 // Handle error
    alert(err)
  });
       }
      
}
