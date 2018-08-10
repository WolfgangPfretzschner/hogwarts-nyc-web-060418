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
      hogs1: hogs,
      hogs: this.addHogsImage()
    }
  }

  sortByWeight = () => {
    let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    let sortArray = this.state.hogs1.sort((a,b) => a[weight] > b[weigh]t ? 1 : (b[weight]  > a[weight] ? -1 : 0))
    this.setState({
      hogs1: sortArray
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
          < Nav />
          < Filter sortByWeight={this.sortByWeight} />
          < HogsContainer hogs={this.state.hogs1}/>

      </div>
    )
  }
}

export default App;
