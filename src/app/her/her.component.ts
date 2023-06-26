import { Component } from '@angular/core';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-her',
  templateUrl: './her.component.html',
  styleUrls: ['./her.component.css']
})
export class HerComponent {
  public her:any

  constructor(private api: ServicesService) { }
  ngOnInit(): void {
    // this.GetAllProducts()
    this.GetAllProductsForFemale()
    

  }
  private GetAllProductsForFemale(): void {
    this.api.getProductsForHer().subscribe(result => {
      this.her = result
    });
  }

}
