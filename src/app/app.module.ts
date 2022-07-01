import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './components/star/start.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutes } from './routes/admin.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'productlist', component: ProductListComponent },
  { path: 'productdetail/:id', component: ProductDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'productlist' },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminRoutes,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
