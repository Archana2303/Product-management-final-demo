import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
  }
  deleteproduct(deleterecord){
    this.productservice.deleteservice(deleterecord.value).subscribe();
    }

}
