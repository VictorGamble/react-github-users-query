import React, {Component} from 'react';
import UserCardList from './components/UserCardList'
import './App.css';

 class App extends Component {
  state={
    input: "",
    data: [],
  }

dataLoad = async (url) => {
try {
const response = await fetch(url)
const data = await response.json();
return data; 
} catch (error) {
  console.error("Error is =>", error);
  return error;
}
}

changeHandler = (event) =>{
    this.setState({
       input: event.target.value
    })
}

submitHandler = async (event) => {
event.preventDefault();
const {input} = this.state;
let url = `https://api.github.com/users/${input}`
const userData = await this.dataLoad(url);
try {
  this.setState({
    input: '',
    data: [...this.state.data, userData]
  })
  
} catch (error) {
  console.error("error is ", error);
  return error

}
}
  
  render()
  {
  const {input} = this.state;
    const { data } = this.state
    return (
    <div className="App">
      <form onSubmit={this.submitHandler}>
      <label>Input</label>
      <input type="text" value={input} onChange={this.changeHandler} placeholder="Please input text"></input>
      <button type="submit">Submit</button>
      </form>
       <UserCardList data={data}  />
    </div>
  );
}
}
export default App;
