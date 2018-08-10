import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer';
import Filter from './Filter'

// const addHogsImage = () => {
//   return hogs.map(hog => {
//     let lowerHog = hog.name.toLowerCase();
//     let newHog = lowerHog.split(' ').join('_');
//     return {...hog, image: `/hog-imgs/${newHog}.jpg`}
//   })
// }

class App extends Component {

  addHogsImage = () => {
      return hogs.map(hog => {
        let lowerHog = hog.name.toLowerCase();
        let newHog = lowerHog.split(' ').join('_');
        return {...hog, image: `/hog-imgs/${newHog}.jpg`}
      })
    }

  constructor() {
    super()
    this.state = {
      hogs: this.addHogsImage()
    }
    }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          < Nav />
          < Filter />
          < HogsContainer hogs={this.state.hogs}/>

      </div>
    )
  }
}

export default App;
