import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddTagPanel from '../item-form-add';

import './app.css';

export default class App extends Component {
    maxId = 10;
    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all'
    };

    createTodoItem(label){
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++,
        };
    };

    deleteItem = (id) => {
        this.setState(({todoData}) =>
            {
                const idx = todoData.findIndex((el)=>el.id === id);
                const newArray = [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)];
                return {
                    todoData: newArray
                }
            }
        );
    };

    addItem = (text) =>{

        this.setState(({todoData}) =>
            {
                const newArray = [
                    ...todoData, this.createTodoItem(text)];
                return {
                    todoData: newArray
                }
            }
        );

    };

    editItem = (id, propName) => {
        this.setState(({todoData}) =>
            {
                const idx = todoData.findIndex((el)=>el.id === id);
                const editedItem = {
                    label: todoData[idx].label,
                    important: propName === 'important' ? !todoData[idx].important : todoData[idx].important,
                    done: propName === 'done' ? !todoData[idx].done : todoData[idx].done,
                    id: todoData[idx].id,
                    hide: false
                };

                const newArray = [
                    ...todoData.slice(0, idx),
                    editedItem,
                    ...todoData.slice(idx + 1)];
                return {
                    todoData: newArray
                }
            }
        );
    };

    onToggleDone = (id) =>{
        this.editItem(id, 'done')
    };

    onToggleImportant = (id) =>{
        this.editItem(id, 'important')
    };

    onStringFilter = (term) =>{
        this.setState({term});
    };

    doSearch = (items, term) =>{
        if(term.length === 0) {
            return items;
        }

        return items.filter((item)=>{
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    };

    onStatusFilter = (filter) =>{
        this.setState({filter})
    };

    doFilter = (items, filter) => {
        if(filter === 'all'){
            return items;
        }
        return items.filter((item)=>{
            return filter==='done'? item.done === true: item.done === false
        })
    };

    render() {
        const { todoData, term, filter } = this.state;
        const filteredItems = this.doFilter(todoData, filter);
        const visibleItems = this.doSearch(filteredItems, term);

        const doneCount = todoData.filter((el)=>el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onStringFilter={this.onStringFilter}/>
                    <ItemStatusFilter filter={filter}
                                      onStatusFilter={this.onStatusFilter}/>
                </div>

                <TodoList todos={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleDone={this.onToggleDone}
                          onToggleImportant={this.onToggleImportant}
                />
                <AddTagPanel onItemAdd={this.addItem}/>
            </div>
        );
    }
};

