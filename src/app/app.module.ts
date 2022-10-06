import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { MenuComponent } from './menu/menu.component';
import { MenupageComponent } from './menupage/menupage.component';
import { TvComponent } from './tv/tv.component';
import { FileComponent } from './file/file.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShipComponent } from './ship/ship.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ViewComponent } from './view/view.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MobileComponent,
    MenuComponent,
    MenupageComponent,
    TvComponent,
    FileComponent,
    CartComponent,
    ShipComponent,
    ProductDetailsComponent,
    ViewComponent,
    OrdersComponent,
    AdminpageComponent,
    UpdateComponent,
    LoginComponent,
    ThirdpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
