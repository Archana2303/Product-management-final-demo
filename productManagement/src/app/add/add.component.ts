import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
  }

  addproduct(addrecord)
  {
    this.productservice.addrecords(addrecord.value).subscribe();
  }

}
