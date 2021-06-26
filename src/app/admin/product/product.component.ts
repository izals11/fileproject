import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  productDetail(data: any, idx: any)
  {
    let dialog=this.dialog.open(ProductDetailComponent,{
      width:'400px',
      data: data
    });
    dialog.afterClosed().subscribe(res=>{
      return;
    })
  }
}
