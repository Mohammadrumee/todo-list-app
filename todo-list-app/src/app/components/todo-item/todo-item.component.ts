import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: Todo = {task: '', completed: false};
  @Output() removeTodoEvent = new EventEmitter<string>();
  @Output() completedTodoEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  removeTodoItem(value: string){
    this.removeTodoEvent.emit(value);
  }

  completedTodoItem(value: string){
    alert("compelete :" + value);
    this.completedTodoEvent.emit(value);

  }

}
