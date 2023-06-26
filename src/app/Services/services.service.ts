import { HttpClient } from '@angular/common/http';
import { publishFacade } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(private http:HttpClient) { }

public getallproducts():Observable<any>{
  return this.http.get('https://localhost:7271/api/Products')
}


  public getProductsForMen():Observable<any>{
    return this.http.get('https://localhost:7271/api/Products/MaleProducts')
  }

  public getProductsForUnisex():Observable<any>{
    return this.http.get('https://localhost:7271/api/Products/ProductsForUnisex')
  }

  public getProductsForHer():Observable<any>{
    return this.http.get('https://localhost:7271/api/Products/FemaleProducts')
  }
  public AddNewProducts(productlist: any): Observable<any> {
    return this.http.post('https://localhost:7271/api/Products',
      productlist
    );
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete('https://localhost:7271/api/Products?id=' + id
    );
  }
    public updateProduct(id:number,Products:any):Observable<any> {
      let url= 'https://localhost:7271/api/Products?id=' + id
      return this.http.put(url,Products)
    }
}
