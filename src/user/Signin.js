import React, { Component } from 'react';
import firebaseApp from '../config.js';

class Signin extends Component {
  constructor(props) {
      super(props);
      this.setEmail = this.setEmail.bind(this);
      this.setPassword = this.setPassword.bind(this);
      this.sendData = this.sendData.bind(this);

      this.state = {
          email: '',
          password: ''
      }
  }
  sendData(){
    if(this.state.email!=='' && this.state.password!==''){
      firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        alert(error.message);
      })
    }
  }
  setEmail(e){
    this.setState({email: e.target.value});
  }
  setPassword(e){
    this.setState({password: e.target.value});
  }
  render() {
    return (
      <div>
        <label>Email</label>
        <input type="text" value={this.email} onChange={this.setEmail}/>
        <label>Password</label>
        <input type="password" value={this.password} onChange={this.setPassword}/>
        <button onClick={this.sendData}>Register</button>
      </div>
    );
  }
}

export default Signin;