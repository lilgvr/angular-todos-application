import {Injectable} from "@angular/core";
import {Todo} from "../todos/todos.component";

@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '') || [];
  private id = (this.todos) ? this.todos.length + 1 : 1;

  onToggle(id: number) {
    const x = this.todos.findIndex(t => t.id === id);

    this.todos[x].completed = !this.todos[x].completed;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id)

    for (let i = id - 1; i < this.todos.length; i++) {
      this.todos[i].id--;
    }
    this.id--;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(title: string) {
    const todo: Todo = {
      id: this.id++,
      title: title,
      completed: false,
      date: new Date()
    }
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeCompleted() {
    this.id = 1;
    this.todos = this.todos.filter(t => !t.completed);
    this.todos.map(t => t.id = this.id++);

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
