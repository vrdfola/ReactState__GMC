import React, {Component} from "react";
import './App.css';
import myPicture from './vrdbpanther2.png'


class App extends Component {
 state = {
   fullName : "Dosunmu Folatomi",
   bio : "Valar Moghulis",
   imgSrc: myPicture,
   profession :"Dev.",
   boolShow : true,
   timeInterval : 0
  };
  handleBoolShow = () => {
    this.setState({
      boolShow : !this.state.boolShow
     });
  }
  componentDidMount(){
    setInterval(() => this.setState({timeInterval:this.state.timeInterval + 1 }),1000)
  }
  render(){
    return(
      <div className = "App">
        {this.state.boolShow &&(
          <>
          <h1>Full Name: {this.state.fullName}</h1>
          <h2>Bio : {this.state.bio}</h2>
          <h2>Profession: {this.state.profession}</h2>
          <br/>
          <img src = {this.state.imgSrc}  height ='400' alt = 'vrd'/>
          <br/>
          </>

        )}
        <button onClick = {this.handleBoolShow}>
             Click Me
        </button>
        <p>{this.state.timeInterval}</p>

      </div>
    )
  };
}

export default App;
