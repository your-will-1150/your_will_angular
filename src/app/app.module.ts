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
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProfileOtherComponent } from './components/profile-other/profile-other.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './components/admin/admin.component';
import { UserService } from './services/user.service';

const routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile-other', component: ProfileOtherComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'products', component: ProductsComponent },
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
    ProductDetailComponent,
    ProfileOtherComponent,
    ProfileComponent,
    AddItemComponent,
    FooterComponent,
    AdminComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
