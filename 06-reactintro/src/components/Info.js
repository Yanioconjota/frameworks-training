import React from "react";
import './Info.scss';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: props.logo
    } 
  }
  render() {
    return (
      <div className="Info">
        <h3 className="Title-flex J-center">
          <img className="App-logo" src={this.state.logo} alt="react logo" />
          The Info component
        </h3>
        <p>This is a component within a component and the spinning logo is passed from App.js through User and then Info</p>
      </div>
    );
  }
}
export default Info;
