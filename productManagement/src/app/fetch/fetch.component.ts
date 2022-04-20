import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  productList;

  constructor(private productservice: ProductService)
   {this.fetchdata(); }

  ngOnInit(): void {
  }
  fetchdata()
  {
    this.productservice.fetchproduct().subscribe(
      (resp) => {this.productList=resp;}
    )
  }
    deleteproduct(deleterecord){
    this.productservice.deleteservice(deleterecord.value).subscribe();
    }
    updateproduct(addrecord)
    {
      this.productservice.addrecords(addrecord.value).subscribe();
    }
}
