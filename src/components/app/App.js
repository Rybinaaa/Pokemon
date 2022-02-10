import Cervice from '../cervice/Cervice';
import Header from '../header/Header';
import './App.css'
import logo from '../../images/pokemon-logo.svg'
import { Component } from 'react';
import ListItem from '../listItem/ListItem';
import ItemInfo from '../itemInfo/ItemInfo';
 

let cervice = new Cervice

class App extends Component {
constructor(props){
  super(props)
}

state = {
  name: 'BULBASAUR',
  imgDef: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  id: 1,
  description: `Loves to eat`,
  offset: '0',
}

cervice = new Cervice

onClick = (name) => {
  cervice.getItem(name)
  .then((item) => {
    this.setState({
      name: item.name,
      imgDef: item.imgDef,
      imgShiny: item.imgShiny,
      id: item.id,
      description: item.description,
    })
  }) 
}



  render() {

    const {id, name, imgDef, imgShiny, description} = this.state

      return (
        <div className="App">
          <Header />

          <div className='wrapper'>
            <ListItem onClick={this.onClick}/>
            <ItemInfo key = {id} name = {name} imgShiny = {imgShiny} imgDef = {imgDef} description = {description} id = {id}/>
          </div>
        </div>
      );
  }
}

export default App;
