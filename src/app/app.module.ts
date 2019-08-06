import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileOtherComponent } from './components/profile-other/profile-other.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { ProductsDetailComponent } from './components/products/products-detail/products-detail.component';
import { ProductsUpdateComponent } from './components/products/products-update/products-update.component';
import { ProductsDeleteComponent } from './components/products/products-delete/products-delete.component';

const routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile-other', component: ProfileOtherComponent },
  { path: 'products', children: [
    {path: '', component: ProductsComponent},
    {path: 'detail/:id', component: ProductsDetailComponent},
    {path: 'update/:id', component: ProductsUpdateComponent},
    {path: 'delete/:id', component: ProductsDeleteComponent},
  ]},
  { path: 'order', component: OrderConfirmComponent },
  { path: 'cart', component: CartComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: HomeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignUpComponent,
    CartComponent,
    OrderConfirmComponent,
    ProductsComponent,
    ProfileOtherComponent,
    ProfileComponent,
    AddItemComponent,
    FooterComponent,
    AdminComponent,
    ProductsDetailComponent,
    ProductsUpdateComponent,
    ProductsDeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    AuthService,
    UserService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
