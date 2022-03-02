import {Pipe, PipeTransform} from "@angular/core";
import {Todo} from "../todos/todos.component";

@Pipe({name: 'todosFilter'})
export class TodosFilterPipe implements PipeTransform{
  transform(todos: Todo[], searchString: string = ''): Todo[] {
    if(!searchString.trim()){
      return todos
    }

    return todos.filter(t => {
      return t.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    })
  }

}
