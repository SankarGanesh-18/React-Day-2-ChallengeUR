import React, { Component } from 'react'

export class Car extends Component {
  render() {
    return (
      <div>
        <h1 style={{color:'crimson'}}>Ferrari SF90 Stradale</h1>
        <p/>
        <img  style={{width:'500px',height:'500px'}} src='https://www.supercars.net/blog/wp-content/uploads/2022/02/Ferrari-SF90-Stradale-1.jpg' alt='Ferrari'/>
      </div>
    )
  }
}

export default Car