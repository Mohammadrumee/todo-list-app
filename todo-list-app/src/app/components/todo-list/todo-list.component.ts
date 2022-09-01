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

  addTodoTask(newTodo: Todo): void {
    let task = this.todoList.filter(todo => todo.task === newTodo.task);
    if(task.length === 0){
      this.todoList.push(newTodo);
    }
    
  }

  removeTodoTask(value: string): void{
    let task = this.todoList.filter(todo => todo.task === value);
    if(task !== undefined){
      const idx = this.todoList.findIndex(todo => todo.task == value);
      this.todoList.splice(idx, 1);
    }

  }

  completedTodoTask(value: string): void{
    this.todoList.findIndex(todo => {
      if (todo.task == value) {
        todo.completed = true;
      }
    });
  }

}
