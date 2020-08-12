import React, {Component} from 'react';
import './myProfile.less';
import './myProfile.css';

class MyProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Your name',
      gender: 'Male',
      description: 'Description about yourself',
      iKnow: false
    }
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleGender = (event) => {
    this.setState({
      gender: event.target.value
    });
  }

  handleDescription = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  handleIknow = (event) => {
    this.setState({
      iKnow: event.target.checked
    });
  }

  handleSumbit = (event) => {
    console.log(this.state.name);
    console.log(this.state.gender);
    console.log(this.state.description);
    event.preventDefault();
  }

  render() {
    return (
        <form className="myProfile" onSubmit={this.handleSumbit}>
          <h1 className="title">My Profile</h1>
          <label htmlFor="name">
            <h4>Name</h4>
            <input id="name " className="input-inline" value={this.state.name} onChange={this.handleName} type="text"/>
          </label>
          <label htmlFor="gender">
            <h4>Gender</h4>
            <select onChange={this.handleGender} className="input-inline">
              <option selected value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label htmlFor="description">
            <h4>Description</h4>
            <textarea id="description" value={this.state.description} onChange={this.handleDescription} className="input-inline"></textarea>
          </label>
          <label htmlFor="iKnowBtn">
            <div className="iKnow">
              <input id="iKnowBtn" onClick={this.handleIknow} type="checkbox" />
              I have read the terms of conduct
            </div>
          </label >
          <div className="submit">
            <button className = "submitBtn" 
              disabled={
                this.state.name === 'Your name' 
                || this.state.description === ''
                || !this.state.iKnow} 
              type="submit" >Submit</button>
          </div>
        </form>
    );
  }
}

export default MyProfile;


