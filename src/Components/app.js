import React from 'react';
import "./app.css"
import SeasonDisplay from './SeasonDisplay';
import Loader from "./Loader";
class App extends React.Component{
   state={ lat : null, errorMessage : '' }
   
   componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        Position=> this.setState({ lat : Position.coords.latitude}),
        err=>this.setState({errorMessage : err.message})
        );
   }
   renderComp(){
       return(
    (!this.state.lat && !this.state.errorMessage)
        ?<div><Loader/></div>
        :<div> 
        { (this.state.lat && !this.state.errorMessage)
        ?<SeasonDisplay lat={this.state.lat}/>
        : <div>Message : {this.state.errorMessage}</div>}
        </div>
       )
   }
  
    render (){
        return(<div>
          {this.renderComp()}
          </div>);
    }
}

export default App
