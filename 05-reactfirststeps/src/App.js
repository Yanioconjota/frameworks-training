import './App.css';
import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import _ from 'lodash';
import "./index.css"; 

function Hobbies(props) {
  return (
    <div>
      <p>Hobbies: {props.hobbies.length}</p>
      <div className={props.hobbyClass}>{props.hobbyMessage}</div>
      <div>{props.hobbyRemoved}</div>
      <ul className="HobbiesList">
        {props.hobbies.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                return props.removeHobbyHandler(value);
              }}>
              {value}
            </li>
          );
        })}
      </ul>
      <input onChange={props.updateInputHandler}
             value={ props.inputValue }
             placeholder= { props.placeholder }
             onKeyDown={ props.keyDownHandler }
             className="Mb-15" type="text"></input>
      <button onClick={() => {
                return props.addHobbyHandler();
              }}>Add Hobby</button>
      <button onClick={() => {
                return props.resetHobbiesHandler(props.hobbies);
              }}>Reset</button>
    </div>
  );
}

function Username(props) {
  return (
    <p onClick={() => { return props.nameClickHandler(props.username); }}>
      {props.username}
    </p>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      elements: [],
      message: "",
      hobby: "",
      hobbyClass: "",
      hobbyMessage: "",
      hobbyRemoved: "",
      inputValue: "",
      placeholder: "Type a new hobby",
      hobbies: [
        "👃 Smelling my fingers after scratching my nuts",
        "🦨 To fart in close and crowded places",
        "⚰️ Saying awkward things at funerals",
        "🖕 Cracking my fingers or fingering my crack",
        "😱 To Make weird noises at the gym",
      ],
    };
  }

  changeName() {
    this.setState({
      name: "Homero Simpson",
    });
  }

  reset() {
    this.setState({
      name: this.props.name,
      elements: [],
    });
  }

  addElement() {
    const oldElements = this.state.elements;
    this.setState({
      elements: oldElements.concat(oldElements.length + 1),
    });
  }

  updateHobbyInput(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  changeMessageInput(event) {
    this.setState({
      message: event.target.value,
    });
  }

  userWasClicked(name) {
    alert(name);
  }

  keyDown(e) {
    if (e.key === 'Enter') {
      console.log(e.key);
      this.setState({
        inputValue: e.target.value
      });
      this.addHobby();
    }
  }

  addHobby() {
    const oldElements = this.state.hobbies;
    const emoji = [
      "✌",
      "😂",
      "😝",
      "😁",
      "😱",
      "👉",
      "🙌",
      "🍻",
      "🔥",
      "🌈",
      "☀",
      "🎈",
      "🌹",
      "💄",
      "🎀",
      "⚽",
      "🎾",
      "🏁",
      "😡",
      "👿",
      "🐻",
      "🐶",
      "🐬",
      "🐟",
      "🍀",
      "👀",
      "🚗",
      "🍎",
      "💝",
      "💙",
      "👌",
      "❤",
      "😍",
      "😉",
      "😓",
      "😳",
      "💪",
      "💩",
      "🍸",
      "🔑",
      "💖",
      "🌟",
      "🎉",
      "🌺",
      "🎶",
      "👠",
      "🏈",
      "⚾",
      "🏆",
      "👽",
      "💀",
      "🐵",
      "🐮",
      "🐩",
      "🐎",
      "💣",
      "👃",
      "👂",
      "🍓",
      "💘",
      "💜",
      "👊",
      "💋",
      "😘",
      "😜",
      "😵",
      "🙏",
      "👋",
      "🚽",
      "💃",
      "💎",
      "🚀",
      "🌙",
      "🎁",
      "⛄",
      "🌊",
      "⛵",
      "🏀",
      "🎱",
      "💰",
      "👶",
      "👸",
      "🐰",
      "🐷",
      "🐍",
      "🐫",
      "🔫",
      "👄",
      "🚲",
      "🍉",
      "💛",
      "💚",
    ];
    console.log(this.state.inputValue);
    if (this.state.inputValue !== '') {
      this.setState({
        hobbies: oldElements.concat(`${emoji[_.random(0, emoji.length - 1)]}  ${this.state.inputValue}`),
        inputValue: ''
      });
      console.log(this.state.hobbies);
    }
  }

  removeHobbie(hobby) {
    let hobbies = this.state.hobbies;
    for (let i = 0; i < hobbies.length; i++) {
      if (hobby === hobbies[i]) {
        hobbies.splice(i, 1);
        console.log(hobby, hobbies);
        this.setState({
          hobbies: hobbies,
          hobbyRemoved: <p className="Pillow">{hobby} removed!</p>,
        });
      }
    }
  }

  resetHobbies() {
    this.setState({
      hobbies: [
        "👃 Smelling my fingers after scratching my nuts",
        "🦨 To fart in close and crowded places",
        "⚰️ Saying awkward things at funerals",
        "🖕 Cracking my fingers or fingering my crack",
        "😱 To Make weird noises at the gym",
      ],
      hobbyRemoved: "",
      hobbyClass: "",
      inputValue: "",
      placeholder: "Type a new hobby"
    });
  }

  render() {
    let updateParagraph = "";
    let pClass = "";

    const hobbyClass =
      this.state.hobbies.length <= 3
        ? "Error"
        : this.state.hobbies.length >= 4
        ? "Success"
        : "";
    
    const hobbyMessage =
      this.state.hobbies.length <= 3
        ? "💪 Add new hobbies!"
        : this.state.hobbies.length >= 4
        ? "😝 You're awesome!"
        : "";

    if (this.state.name !== this.props.name) {
      updateParagraph = <p>Name Updated!</p>;
      pClass = "Updated";
    }

    let list = this.state.elements.map((el) => {
      const listStyle = {
        backgroundColor: el % 2 === 0 ? "#ad90d7" : "#d4ebff",
      };
      return (
        <li style={listStyle} key={el}>
          {el}
        </li>
      );
    });
    return (
      <div>
        <h1 className="Title">
          <img className="Logo" src={logo} alt="" /> Playing with React!
        </h1>
        <h4>Extra Components: </h4>
        <Username username="Morgan" nameClickHandler={this.userWasClicked} />
        <Username username="La Sole" nameClickHandler={this.userWasClicked} />
        <hr></hr>
        <h4>Data from the main component: </h4>
        <p className={pClass}>{this.state.name}</p>
        {updateParagraph}
        <button onClick={this.changeName.bind(this)}>Change name</button>
        <button onClick={this.addElement.bind(this)}>Add element</button>
        <button onClick={this.reset.bind(this)}>Reset</button>
        <ul>{list}</ul>
        <input
          placeholder="Type something here"
          type="text"
          value={this.state.message}
          onChange={this.changeMessageInput.bind(this)}
        ></input>
        <p>{this.state.message}</p>
        <hr></hr>
        <h4>Exercise: </h4>
        <ol>
          <li>Create a "div" and render a base component with React✔️</li>
          <li>
            Output an array of hobbies in that div providing some defaolt
            hobbies✔️
          </li>
          <li>
            Add a new hobby button and a button to add a title from an input
            field✔️
          </li>
          <li>Click hobbies to remove them✔️</li>
          <li>Add a Hobby deleted message showing the las deleted hobby✔️</li>
          <li>Add a hobby counter✔️</li>
          <li>
            Dinamically add style or classes to the hobby counter if you have
            mor or less 3 hobbies✔️
          </li>
          <li>Outsource the hobbies list into a re-usable component✔️</li>
        </ol>
        <hr></hr>
        <h4>Solution: </h4>
        <Hobbies
          hobbies={this.state.hobbies}
          hobbyClass={hobbyClass}
          hobbyMessage={hobbyMessage}
          hobbyRemoved={this.state.hobbyRemoved}
          inputValue={this.state.inputValue}
          removeHobbyHandler={this.removeHobbie.bind(this)}
          resetHobbiesHandler={this.resetHobbies.bind(this)}
          addHobbyHandler={this.addHobby.bind(this)}
          updateInputHandler={this.updateHobbyInput.bind(this)}
          keyDownHandler={this.keyDown.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App name="Homero Thompson" />,
  document.getElementById("root")
);


export default App;
