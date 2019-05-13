import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'


const App = () => {
    const isLoggedIn = true;
    const loginBox = <span>Log in please</span>;
    return(
        <div>
            { isLoggedIn ? null : loginBox}
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};


console.log(<App/>);

ReactDOM.render(<App/>, document.getElementById('root'));