import { Component } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { PaymentComponent } from '../payment/payment.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-him',
  templateUrl: './him.component.html',
  styleUrls: ['./him.component.css']
})
export class HimComponent {
  public Shirts: any
  amount: any
  router: any;



  constructor(private api: ServicesService) { this.GetAllProducts(); }
  ngOnInit(): void {
    // this.GetAllProducts()
    this.GetAllProductsForMen()
  }

  pay():void{
    this.router.navigate(['payment']);
  }


  private GetAllProductsForMen(): void {
    this.api.getProductsForMen().subscribe(result => {
      this.Shirts = result
    });

  }

  private GetAllProducts(): void {
    this.api.getProductsForUnisex().subscribe(result => {
      this.Shirts = result
    });

  }

}


