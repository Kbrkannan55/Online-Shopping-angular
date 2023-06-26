import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-unisex',
  templateUrl: './unisex.component.html',
  styleUrls: ['./unisex.component.css']
})
export class UnisexComponent implements OnInit {
  public her:any

  constructor(private api: ServicesService) { }
  ngOnInit(): void {
    // this.GetAllProducts()
    this.GetAllProductsForAll()
    

  }
  private GetAllProductsForAll(): void {
    this.api.getProductsForUnisex().subscribe(result => {
      this.her = result
    });
  }

}
