import { todos } from './data';
import { Todo } from './todo';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
    todos: Todo[] = todos;

    constructor(private http: Http) {}

    getTodos(): Todo[] {
        return this.todos;
    }

    createTodo(title: string) {
        const todo = new Todo(title);
        this.todos.push(todo);
    }

    deleteTodo(todo: Todo) {
        const index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

    toggleTodo(todo: Todo) {
        todo.completed = !todo.completed;
    }
}
