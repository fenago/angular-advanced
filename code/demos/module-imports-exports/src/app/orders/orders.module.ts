import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderNumberPipe } from './shared/order-number.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    OrderListComponent,
    OrderDetailComponent,
    OrderFormComponent,
    OrderNumberPipe
  ],
  exports: [OrderDetailComponent]
})
export class OrdersModule {}
