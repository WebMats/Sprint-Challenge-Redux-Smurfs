import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Spinner from './UI/Spinner/Spinner';

import './App.css';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props)
    this.smurfName = React.createRef();
    this.smurfAge = React.createRef();
    this.smurfHeight = React.createRef();
  }

  componentDidMount() {
    this.props.onInitSmurfs();
  }

  addNewSmurf = (e) => {
    e.preventDefault()
    const newSmurf = {
      name: this.smurfName.current.value,
      age: this.smurfAge.current.value,
      height: this.smurfHeight.current.value
    }
    this.props.onAddSmurf(newSmurf);
    this.smurfName.current.value = '';
    this.smurfAge.current.value = '';
    this.smurfHeight.current.value = '';
  }

  render() {
    let smurfs = <Spinner/>;
    if (this.props.smurfs.length > 0) {
      smurfs = this.props.smurfs.map((smurf, i) => (
        <div key={i}>
          <p>{smurf.name}</p>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </div>
      ))
    }
    return (
      <div className="App">
        <div>
            {smurfs}
        </div>
        <form onSubmit={this.addNewSmurf}>
          <input ref={this.smurfName} placeholder="Smurf Name" />
          <input ref={this.smurfAge} placeholder="Smurf Age"/>
          <input ref={this.smurfHeight} placeholder="Smurf height"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInitSmurfs: () => dispatch(actions.initSmurfs()),
    onAddSmurf: (newSmurf) => dispatch(actions.addSmurf(newSmurf))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
