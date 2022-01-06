import React, {Component} from 'react';
import { Counter } from './components/Counter/Counter';
import { Dropdown } from './components/Counter/Dropdown/Dropdown';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import TodoList from './components/TodoList';
import initialToDos from './todos.json';
import { Form } from './components/Form/Form';

/* const colorPickerOptions = [
   { label: 'red', color: '#F44336' },
   { label: 'green', color: '#4CAF50' },
   { label: 'blue', color: '#2196F3' },
   { label: 'grey', color: '#607D8B' },
   { label: 'pink', color: '#E91E63' },
   { label: 'indigo', color: '#3F51B5' },
]; */

class App extends Component {
  state = {
    todos: initialToDos,
  };

  

  /* deleteTodo = (todoId) => {
      this.setState((prevState) => {
        return (
           {
             todos: prevState.todos.filter(todo => todo.id !== todoId),
           }
        );
      });
  }; */

  //==================================== Form ===========================

  /* handleNameChange = event => {
    
    this.setState({name: event.currentTarget.value})
  };

  handleTagChange = event => {
    
    this.setState({tag: event.currentTarget.value})
  }; */

  handlerFormSubmit = data => {
    console.log(data)
  };

  //==================================== Form ===========================

  render() {
    /* const { todos } = this.state;

    const TotalTodoCount = todos.length;
    const CompletedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total), 0,
    ); */
    
    return (
      <>
          <Form onSubmit={this.handlerFormSubmit}/>
          {/* <h1>Состояние компонента</h1> */}

          {/* <Counter initialValue={10}/> */}

          {/* <Dropdown /> */}

          {/* <ColorPicker options={colorPickerOptions} /> */}

          {/* <div>
            <p>
               Общее кол-во: {TotalTodoCount}
            </p>
            <p>
               Кол-во выполненных: {CompletedTodoCount}
            </p>
          </div>
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/> */}

      </>
    ); 
  } 
};
  

  
export default App;
