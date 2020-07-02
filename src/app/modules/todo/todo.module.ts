import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoManagementComponent} from './todo-management/todo-management.component';

@NgModule({
  declarations: [TodoManagementComponent],
  imports: [CommonModule, TodoRoutingModule],
})
export class TodoModule {}
