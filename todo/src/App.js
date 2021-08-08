
import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: [...this.getData()],
      filtered:  [...this.getData()],

    }
  }



  addHandler = (childData) => {
    let state = this.state;
    state.todos.push(childData)

    this.setState( state )
    console.log(this, state.todos)
    this.filtiringData() // called here because filter starts at null value but if we call it here it
    // will give it a value of all.
      localStorage.setItem('old', JSON.stringify(this.state.todos));

  }

  removeHandler = (id) => {
    let state = this.state;
      let index=this.state.filtered.findIndex((todo)=>{
         return  todo.id === id
      })

    state.todos = state.todos.filter((todo) => {
      return todo.id !== id
    })
    state.filtered = state.filtered.filter((todo) => {
      return todo.id !== id
    })

    console.log(state)
    this.setState(state)
    localStorage.setItem('old', JSON.stringify(this.state.todos));


  }
  completedHandler = (id) => {
    let state = this.state;
    let item = state.todos.findIndex((todo) => {
      return todo.id === id
    })


    state.filtered[item].isDone = !state.filtered[item].isDone;


    this.setState(state)
    console.log(state.filtered);
    localStorage.setItem('old', JSON.stringify(this.state.todos));

  }


  filtiringData=(filter='all')=>{
    let state=this.state;
    filter==='completed'&&
     (state.filtered= state.todos.filter((todo)=>{
       return todo.isDone===true
    }))
    filter==='uncompleted'&&
    (state.filtered=state.todos.filter((todo)=>{
       return todo.isDone===false
    }))
    filter==='all'&&
    (state.filtered=state.todos)

    this.setState(state)
    console.log(this.state.filtered)

  }
  getData=()=>{
    let data=JSON.parse(localStorage.getItem('old'));
    return (data?(data):[])
  }


  render() {
    return (
      <div>

        <div className="App">
          <header>
            <h1>Ashrf Todo List</h1>
          </header>
        </div>
        <div>
          <Form handler={this.addHandler} filtering={this.filtiringData} />

        </div>

        {this.state.filtered.map((todo,index) => {
          return (
            <TodoList data={todo.todo} key={index} id={todo.id}
              complete={this.completedHandler} isDone={todo.isDone} trash={this.removeHandler} />
          )
        })}
      </div>
    )
  }


}

export default App;
