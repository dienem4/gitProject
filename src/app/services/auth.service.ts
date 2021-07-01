import { Injectable } from '@angular/core';
import{ HttpClient}from '@angular/common/http';
import{UserRegistrer}from '../interfaces/user-registrer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 url: string ='http://localhost:3000';
  constructor(private http:HttpClient) { }

  login(email :string,password:string){

      return new Promise((resolve,rejects)=>{

           this.http.post(this.url+'/login',{email:email,password:password}).subscribe((data: any)=>{
               (!data.sucess)? rejects(false):  resolve(data);
            } );
           
      });
  }

     registrer(user: UserRegistrer){
           return new Promise((resolve,rejects)=>{
                 this.http.post(this.url+'/signup',user).subscribe((data: any)=>{
                   (!data.sucess)? rejects(false):  resolve(data);
           });
      });
          
    }

    getProfile(){
    return this.http.get(this.url+'/profil');
      }

}
