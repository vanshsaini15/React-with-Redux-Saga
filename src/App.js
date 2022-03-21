import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux-Saga</h1>
        <h2>Count: <span>{this.props.count}</span></h2>
        <button onClick={this.props.counterDown}> - </button>
        <span> {this.props.count}</span>
        <button onClick={this.props.counterUp}> + </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};
//takes the state of app and now can pass property 'count' in any component

const mapDispatchToProps = dispatch => {
  return {
    counterUp: () => dispatch({ type: "COUNTER_UP", value: 1 }),
    counterDown: () => dispatch({ type: "COUNTER_DOWN", value: 1 })
  };
  //lets you create functions that dispatch when called, and pass those functions as props to your component.
};
export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(App);
