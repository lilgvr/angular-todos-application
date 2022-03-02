import {Component, OnInit} from '@angular/core';
import {TodosService} from "../shared/todos.service";

export interface Todo {
  id: number,
  title: string,
  completed: boolean,
  date?: any
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  searchString = '';

  constructor(public todosService: TodosService) {
  }

  ngOnInit(): void {
  }

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

  removeCompleted() {
    this.todosService.removeCompleted();
  }

}
