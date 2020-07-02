import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  readonly baseUrl = `${environment.baseUrl}/todos`;
  constructor(private http: HttpClient) {}

  public getListTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  public getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/${id}`);
  }

  public postTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  public putTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseUrl}/${todo.id}`, todo);
  }

  public deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.baseUrl}/${todo.id}`);
  }
}
