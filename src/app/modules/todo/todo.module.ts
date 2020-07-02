import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoManagementComponent} from './todo-management/todo-management.component';
import {SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TodoManagementComponent],
  imports: [CommonModule, TodoRoutingModule, SharedModule],
})
export class TodoModule {}
