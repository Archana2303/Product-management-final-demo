import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  link = 'http://localhost:9000'

  public addrecords(productdata)
  {
    return this.http.post(this.link+'/add',productdata);
  }
  public updateproduct(productdata)
  {
    return this.http.post(this.link+'/update',productdata);
  }
  public fetchproduct()
  {
    return this.http.get(this.link+'/fetch');
  }
  public deleteservice(deleteproduct)
  {
    return this.http.post(this.link+'/delete',deleteproduct);
  }

  


}

