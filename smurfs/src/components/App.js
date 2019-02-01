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
    this.state = {
      deleteInput: ""
    }
  }

  componentDidMount() {
    this.props.onInitSmurfs();
  }

  addNewSmurf = (e) => {
    e.preventDefault()
    const name = this.smurfName.current.value
    const age = this.smurfAge.current.value
    const height = this.smurfHeight.current.value
    if (name === '' || age === '' || height === '') {
      return;
    }
    const newSmurf = {
      name: name,
      age: age,
      height: height
    }
    this.props.onAddSmurf(newSmurf);
    this.smurfName.current.value = '';
    this.smurfAge.current.value = '';
    this.smurfHeight.current.value = '';
  }
  deleteSmurfHandler = async (e) => {
    e.preventDefault();
    e.persist();
    this.setState(prevState => {
      const smurf = this.props.smurfs.filter(smurf => smurf.name === prevState.deleteInput)[0];
      const id = smurf !== undefined ? smurf.id : null;
      id !== null && this.props.onDeleteSmurf(id);
      return {deleteInput: ''}
    })
  }

  render() {
    let smurfs = <Spinner/>;
    if (this.props.smurfs.length > 0) {
      smurfs = this.props.smurfs.map((smurf, i) => (
        <div key={i}>
          <p><strong>Name:</strong> {smurf.name}</p>
          <p><strong>Age:</strong> {smurf.age}</p>
          <p><strong>Height:</strong> {smurf.height}</p>
        </div>
      ))
    }
    let formBody = (
      <React.Fragment>
        <input ref={this.smurfName} placeholder="Smurf Name" />
        <input ref={this.smurfAge} placeholder="Smurf Age" style={{width: "60px"}}/>
        <input ref={this.smurfHeight} placeholder="Smurf height"/>
        <button>Submit</button>
      </React.Fragment>
    )
    if (this.props.adding) {
      formBody = <Spinner />
    }
    return (
      <div className="App">
        <div className="SmUrFlIsT">
          <h1 style={{color: "#35a1d3f8"}}>Smurf Village!</h1>
            {smurfs}
        </div>
        <form onSubmit={this.addNewSmurf} className="SmUrFlIsTfOrM">
          {formBody}
        </form>
        <form onSubmit={this.deleteSmurfHandler}>
          <input className="DeLeTeInPuT" value={this.state.deleteInput} onChange={(e) => this.setState({deleteInput: e.target.value})} placeholder="Type Name To Delete"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    adding: state.addingSmurf
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInitSmurfs: () => dispatch(actions.initSmurfs()),
    onAddSmurf: (newSmurf) => dispatch(actions.addSmurf(newSmurf)),
    onDeleteSmurf: (id) => dispatch(actions.deleteSmurf(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
