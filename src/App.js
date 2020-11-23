import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import MainBody from './Components/MainBody'
import ListItems from './Components/ListItems'
import FilterComp from './Components/FilterComp'

class App extends Component
{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        month:'',
        key:''
      },
      displayState:''
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.handleDisplaychange = this.handleDisplaychange.bind(this);
    this.filterItems = this.filterItems.bind(this);

  }

  handleInput(e){
    this.setState({
      currentItem:{
        text : e.target.value,
        month : new Date().getMonth(),
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);

    if(newItem.text !==""){
      const newItems = [...this.state.items, newItem]
      this.setState({
        items : newItems,
        currentItem:{
          text:'',
          month: '',
          key:''
        },
        displayState:''
      })
    }
  }

  deleteItem(key){
    const updatedItem = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items : updatedItem
      })
  }

  setUpdate( text, key){
    const items= this.state.items;
    items.map( item=>{
      if(item.key === key)
        item.text = text;
    })
    this.setState({
      items : items
    })
  }

  handleDisplaychange(e){
    e.preventDefault();
    this.setState({
      displayState:e.target.value
    })
  }

  filterItems(){
    if( this.displayState ==='month'){
      const currentMonth = new Date().getMonth();
      const filteredItem = this.state.items.filter(item =>
        item.month !==currentMonth);
        this.setState({
          items : filteredItem
        })
    }
  }

  render()
  {
      return(
        <div>          
          <Header />
          <FilterComp  handleDisplaychange={this.handleDisplaychange} displayState={this.state.displayState} filterItems={this.filterItems} />
          <MainBody text={this.state.currentItem.text} addItem={this.addItem} handleInput={this.handleInput} />
          <ListItems items={this.state.items} deleteItem = {this.deleteItem} setUpdate = {this.setUpdate} />
        </div>
      )
  }
}

export default App;