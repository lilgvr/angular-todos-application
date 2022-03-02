import {Component, OnInit} from '@angular/core';
import {TodosService} from "../shared/todos.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  title= '';

  constructor(public todosService: TodosService) {
  }

  ngOnInit(): void {
  }

  addTodo() {
    this.todosService.addTodo(this.title);
    this.title = '';
  }
}
