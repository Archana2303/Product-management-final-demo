import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private productservice : ProductService) { }

  ngOnInit(): void {
  }
  updateproduct(addrecord)
  {
    this.productservice.addrecords(addrecord.value).subscribe();
  }

}
