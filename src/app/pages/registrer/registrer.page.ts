import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ForgotPasswordComponent } from 'src/app/modals/forgot-password/forgot-password.component';
 
interface userRegistrer  {
  firstname:string;
  lastname:string;
  phone:string;
  email:string;
  password:string;
  repassword:string;
}
@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.page.html',
  styleUrls: ['../login/login.page.scss','/registrer.page.scss'],
})


export class RegistrerPage implements OnInit {
        user :userRegistrer={firstname:'',lastname:'',phone:'',email:'',password:'',repassword:''};

  constructor( private camera: Camera) { }

  ngOnInit() { }

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
