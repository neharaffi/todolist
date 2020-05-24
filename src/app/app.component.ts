import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TODOLIST';
  todos = [];
addTodo(newTodoLabel){
  var newTodo = {
    label: newTodoLabel
  };
  this.todos.push(newTodo);
}
deleteTodo(todo){
  this.todos = this.todos.filter(t => t.label!== todo.label);
}
}
