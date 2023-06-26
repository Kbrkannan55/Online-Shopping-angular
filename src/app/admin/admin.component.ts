import { Component } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  public products: any
  public AddForm!: FormGroup;
  
  productID!: any;

  constructor(private formBuilder: FormBuilder,private api: ServicesService) { }
  ngOnInit(): void {

    this.GetAllProducts()
    this.init();
  }




  private init(): void {
    this.AddForm = this.formBuilder.group({
      productId:[],
      productName: [],
      productPrice: [],
      productQuantity: [],
      productType: [],
      sex:[],
      productBrand:[]
    });
  }


  LocationList: any = {
      productName: '',
      productPrice: '',
      productQuantity: '',
      productType: '',
      sex:'',
      productBrand:''
  };

  public UpdateProductById() {
    console.log(this.LocationList);
    return this.api.updateProduct(this.productID, this.LocationList)
      .subscribe((result) => {
        alert(' Data Updated ');
      });
  }



 public deleteProduct(): void {
    console.log('hi');
    this.api.deleteById(this.productID).subscribe((res) => {
      alert('Deleted');
    });
  }


  public Add(): void {
    console.log("Added")
    console.log(this.AddForm)
    this.api.AddNewProducts(this.AddForm.value).subscribe((result) => {
      alert(' Data Added ');
    });
  }
  private GetAllProducts(): void {
    this.api.getallproducts().subscribe(result => {
      this.products = result
    });

  }
  openPopup() {
    let popup = document.getElementById('popup');
    popup?.classList.add('open');
  }
  closePopup() {
    let popup = document.getElementById('popup');
    popup?.classList.remove('open');
  }
  openPopup1() {
    let popup = document.getElementById('popup1');
    popup?.classList.add('open');
  }
  closePopup1() {
    let popup = document.getElementById('popup1');
    popup?.classList.remove('open');
  }
  openPopup2() {
    let popup = document.getElementById('popup2');
    popup?.classList.add('open');
  }
  closePopup2() {
    let popup = document.getElementById('popup2');
    popup?.classList.remove('open');
  }
}