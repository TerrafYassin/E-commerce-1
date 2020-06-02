import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import {Product} from "../../model/product";
import {Cart} from "../../model/cart";
import {CartPageComponent} from "../cart/cart-page.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {categoryRoutes} from "./category.routes";
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/products.service";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule} from "@angular/http";

describe('Category Page', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let cartPageComponent: CartPageComponent;
  let products: Product[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
        CategoryComponent,CartPageComponent
      ],
      providers: [CartService,ProductService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let f = TestBed.createComponent(CartPageComponent);
    cartPageComponent = f.componentInstance;
    f.detectChanges();
  })
});