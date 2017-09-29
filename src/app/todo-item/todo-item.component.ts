import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../shared/todo';

@Component ({
    selector: 'app-todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();

    onToggle() {
        this.toggle.emit(this.todo);
    }

    onDelete() {
        this.delete.emit(this.todo);
    }
}
