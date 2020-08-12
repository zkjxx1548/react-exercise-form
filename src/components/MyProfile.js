import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Your name',
      gender: 'Male',
      description: 'Description about yourself'
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

  handleSumbit = (event) => {
    console.log(this.state.name);
    console.log(this.state.gender);
    console.log(this.state.description);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSumbit}>
          <h1>My Profile</h1>
          <label htmlFor="name">
            <h4>Name</h4>
            <input value={this.state.name} onChange={this.handleName} type="text"/>
          </label>
          <label htmlFor="gender">
            <h4>Gender</h4>
            <select onChange={this.handleGender}>
              <option selected value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label htmlFor="description">
            <h4>Description</h4>
            <textarea value={this.state.description} onChange={this.handleDescription}></textarea>
          </label>
          <button 
            disabled={
              this.state.name === 'Your name' 
              || this.state.description === ''} 
            type="submit" >Submit</button>
        </form>
    );
  }
}

export default MyProfile;


