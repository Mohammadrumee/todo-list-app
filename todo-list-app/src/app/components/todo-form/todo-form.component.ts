import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() saveEvent = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  newTodo:Todo = {
    task: '',
    completed: false
  }

  todo:Todo = { ...this.newTodo};

  addTask(): void {
    if(this.newTodo.task.length > 0) {
      this.saveEvent.emit(this.newTodo);
      this.newTodo = { ...this.todo};
    }else{
      alert("Please enter the task!");
    }
 }
}
