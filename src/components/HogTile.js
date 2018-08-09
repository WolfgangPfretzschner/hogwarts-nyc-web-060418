import React from 'react'

class HogTile extends React.Component {

  state = {
    toggle: true,
  }

  handleClick = (e) => {
    this.setState ({
      toggle: this.state.toggle = !this.state.toggle
    })
  }
  handleInformation = () => {
      if (this.state.toggle !== true) {
        return (<div>
          <div> Name:  {this.props.hog.name}</div>
        <div>Specialty:  {this.props.hog.specialty}</div>
        <div>Greased:  {this.props.hog.greased}</div>
        <div>Ratio:  {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</div>
        <div>Heightest Medal:  {this.props.hog['highest medal achieved']}</div></div>)
      } else {
          return (<div>
          {this.props.hog.name}</div>)
      }
    }

  render(){
    console.log(this.state.toggle)
    return (<div className="ui eight wide column">
      <img onClick={() => this.handleClick()} src={this.props.hog.image} />
      {this.handleInformation()}
      </div>
      )
  }

}



export default HogTile
