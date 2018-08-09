import React, {Component} from 'react'
import HogTile from './HogTile'
import { lstat } from 'fs';

export default (props) => {

  let makeHogs = props.hogs.map(hog => <HogTile hog={hog} />)

  return(
    <div className="ui grid container">
      {makeHogs}
    </div>
  )

}
