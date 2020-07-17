import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private ProUrl: string ="http://localhost:8080/products";
  products = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.ProUrl).subscribe(data=>{
      console.log(data['_embedded'].products);
      this.products = data['_embedded'].products;
    });
  }
  

}
