import React, { Component } from 'react';
import shortid from 'shortid';
/* import { Counter } from './components/Counter/Counter';
import { Dropdown } from './components/Counter/Dropdown/Dropdown';
import { ColorPicker } from './components/ColorPicker/ColorPicker'; */
import TodoList from './components/TodoList';
import initialToDos from './todos.json';
import { TodoEditor } from './components/TodoList/TodoEditor/TodoEditor';
import { Filter } from './components/TodoList/Filter';
import { Modal } from './components/TodoList/Modal/Modal';

/* import { Form } from './components/Form/Form'; */

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
    filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text: text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  getCompletedTodoCount = () => {
    const { todos, filter } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  deleteTodo = todoId => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => todo.id !== todoId),
      };
    });
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  };
  //==================================== Form ===========================

  /* handleNameChange = event => {
    
    this.setState({name: event.currentTarget.value})
  };

  handleTagChange = event => {
    
    this.setState({tag: event.currentTarget.value})
  }; */

  /*  handlerFormSubmit = data => {
    console.log(data)
  }; */

  //==================================== Form ===========================

  render() {
    const { todos, filter, showModal } = this.state;

    const TotalTodoCount = todos.length;

    const CompletedTodoCount = this.getCompletedTodoCount();

    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button onClick={this.toggleModal}>Close</button>
          </Modal>
        )}
        {/* <Form onSubmit={this.handlerFormSubmit}/> */}
        {/* <h1>?????????????????? ????????????????????</h1> */}

        {/* <Counter initialValue={10}/> */}

        {/* <Dropdown /> */}

        {/* <ColorPicker options={colorPickerOptions} /> */}

        {/* <div>
          <p>?????????? ??????-????: {TotalTodoCount}</p>
          <p>??????-???? ??????????????????????: {CompletedTodoCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
      </>
    );
  }
}

export default App;
