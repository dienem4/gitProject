import { Injectable } from '@angular/core';
import{ HttpClient}from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 url: string ='http://localhost:3000';
  constructor(private http:HttpClient) { }

  login(email :string,password:string){

      return new Promise((resolve,rejects)=>{

           this.http.post(this.url+'/login',{email:email,password:password}).subscribe((data: any)=>{
               if (!data.sucess)
                 rejects(false)
                 resolve(data)
            } )
           
      })
  }
  getProfile(){
    return this.http.get(this.url+'/profil');
  }
}
