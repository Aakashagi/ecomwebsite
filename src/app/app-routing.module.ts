import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CartComponent } from './cart/cart.component';
import { FileComponent } from './file/file.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MenupageComponent } from './menupage/menupage.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShipComponent } from './ship/ship.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { TvComponent } from './tv/tv.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',component:ViewComponent},
  {path:'view',component:ViewComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'menutv/:id',component:TvComponent},
  {path:'cart',component:CartComponent},
  {path:'product',component:ProductDetailsComponent},
  {path:'file',component:FileComponent},
  {path:'shipping',component:ShipComponent},
  {path:'orders',component:OrdersComponent},
  {path:'admin',component:AdminpageComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'third/:id',component:ThirdpageComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
