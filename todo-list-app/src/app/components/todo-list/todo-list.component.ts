import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  title: string = "To-do List";

  todoList: Todo [] = [
    {task: "EAT", completed: false},
    {task: "CODE", completed: false},
    {task: "SLEEP", completed: false}
  ]


  newTodo:Todo = {
    task: '',
    completed: false
  }

  addTodoTask(newTodo: Todo) {
    this.todoList.push(newTodo);
  }

  removeTodoTask(value: string){
    alert("remove from parent :" + value);

    const idx = this.todoList.findIndex(players => {
      return players.task == value;
    });
    this.todoList.splice(idx, 1);

  }


}
