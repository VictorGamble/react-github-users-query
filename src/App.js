import React, {Component} from 'react';
import UserCardList from './components/UserCardList'
import './App.css';

 class App extends Component {
  state={
    input: "",
    data: []
  }

dataLoad = async (url) => {
try {
let url = `https://api.github.com/users/[username]`
const response = await fetch(url)
const data = await response.json();
console.log(data)
return data;
  
} catch (error) {
  console.error("Error is =>", error);
  return error;
}
}

changeHandler = (event) =>{
    this.setState({
       input:event.target.value
    })
}
submitHandler = async (event) => {
event.preventDefault();
const {input} = this.state;
let url = `https://api.github.com/users/${input}`
const {data} = await this.dataLoad(url);
this.setState({
  input: "",
  data: [...data, input ]
})
}
  
  render(){
  const {input} = this.state;
  const {data} = this.state
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
