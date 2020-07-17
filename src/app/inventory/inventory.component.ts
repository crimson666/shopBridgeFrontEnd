import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  product = {
    pName : '',
    pPrice : '',
    pBrand : '',
    pCategory : '',
    pDescription : ''
  }
  constructor(private http:HttpClient,private route : Router) { }
  private ProUrl: string ="http://localhost:8080/products";
  ngOnInit(): void {
  }
  AddProduct(){
    const postData = this.dataMapper();
    this.http.post(this.ProUrl,postData).subscribe(data=>{
      console.log(data);
      this.route.navigate(['/productlist']);
    });
  }

  dataMapper() {
   const returnedData = {
      pbrand: this.product.pBrand,
      pname: this.product.pName,
      pcategory: this.product.pCategory,
      price: this.product.pPrice,
      pdescription: this.product.pDescription
    }
    
  return returnedData;
  }
}
