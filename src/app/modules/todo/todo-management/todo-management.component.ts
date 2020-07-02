import {Component, OnInit} from '@angular/core';
import {TodoService} from 'src/app/shared/http-services/todo.service';
import {Todo} from 'src/app/shared/models/todo';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-management',
  templateUrl: './todo-management.component.html',
  styleUrls: ['./todo-management.component.scss'],
})
export class TodoManagementComponent implements OnInit {
  public todo$: Observable<Todo[]>;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todo$ = this.todoService.getListTodo();
  }
}
