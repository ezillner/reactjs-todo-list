import React from 'react';
import './App.css';
import {InputBox} from './components/InputBox.js';
import {CreateList} from './components/CreateList.js';
import {EditView} from './components/EditView.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
        userInput: '',
        list: [],
        isEditMode: false,
        itemIndex: ''
    };
    this.addToList = this.addToList.bind(this);
    this.changeUserInput= this.changeUserInput.bind(this);
    this.deleteFromList = this.deleteFromList.bind(this);
    this.changeEditMode=this.changeEditMode.bind(this);
    this.editList = this.editList.bind(this);
  }

  
  // Adds an item to the list, this function is passed to the onClick for the 'Add' button
  addToList() {
    //creats a list called 'listArray' that clones the state of the current list
    let listArray = this.state.list;
    //take user input (input) and pushes it to the list array
    listArray.push(this.state.userInput);
    //sets the new state of list to the newly added list (listArray), also deletes any user input from the text box for a fresh start
    this.setState({
        list: listArray,
        userInput: ''
    })
  }

changeUserInput(input) {
  this.setState({
      userInput: input
  })
}

//Deletes a list item, this function is passed to the onClick for the 'Delete' button next to each item
deleteFromList(index){
  let listArray = this.state.list;
  listArray.splice(index,1);
  this.setState ({
      list:listArray
  })
}

changeEditMode(index) {
  this.setState({
      itemIndex: index,
      isEditMode: !this.state.isEditMode,
  })
  console.log(index);
}

editList (input, index) {
  console.log(index)
  let listArray = this.state.list;
  let num= this.state.itemIndex;
  ///listArray.push(input);
  if (input === ''){
    listArray[num]= listArray[num];
  } else {
    listArray[num] = input;
  }
  this.setState({
      list:listArray,
      userInput: ''
  })
}

  render(){
   if (this.state.isEditMode === false ) {
    return (
      <div>
        <header className="header">
          <h1>My Todo List</h1>
        </header>
        <div className="input-box">
          <InputBox userInput={this.changeUserInput} addList = {this.addToList}/>
        </div>
        <div className="list">
          <CreateList delete={this.deleteFromList} listArr={this.state.list} editMode={this.changeEditMode}/>
        </div>
      </div>
      );
    } else {
      return (
      <div>
    
        <div>
          <p>You are currently editing item: {this.state.list[this.state.itemIndex]}</p>
          <EditView item ={this.state.list[this.state.itemIndex]} listArr={this.state.list} userInput={this.changeUserInput} editMode={this.changeEditMode} editArr={this.editList} input={this.state.userInput}/>
        </div>
         
      </div>
    );
  }
}
}
export default App;
