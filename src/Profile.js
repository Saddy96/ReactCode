import React, {Component} from 'react';
import './App.css';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:this.props.name,
            id : this.props.id
        }
    }
    render(){
        console.log(this.props);
        return (
            <div className="profile">
            <div className="card">
  {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
  <div className="container">
    <h4><b>{this.state.name}</b></h4>
    <p>{this.state.id}</p>
  </div>
</div>
            </div>
        )
    };
};

export default Profile;