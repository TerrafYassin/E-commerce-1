
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "../model/product";
import { catchError, tap, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';



@Injectable()
export class ProductService {
  private productUrl = "http://localhost:3000/products";
  private utl ="../../assets/mock-data/products.json";
  constructor(public http: Http) { }


getAllproductTest (){
  return this.http.get(this.utl)
  .map((res: Response) => res.json())
  .catch((error: any) => Observable.throw(error || 'Server error'));

}



  public getProducts() {
    return this.http.get(this.productUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getProduct(id: number): Observable<Product | undefined> {
    return this.getProducts()
      .pipe(
        map((products: Product[]) => products.find(p => p.id === id))
      );
  }

  postProduct(prod: Product){
    return this.http.post(this.productUrl, prod);
  }


  deleteProduct(_id: string) {
    return this.http.delete(this.productUrl + `/${_id}`);
  }


  /*     onSubmit(form :NgForm):{
  
      }
   */


}