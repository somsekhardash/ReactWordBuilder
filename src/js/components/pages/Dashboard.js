import React from "react";
import {connect} from "react-redux";

import {fetchUser} from "../Actions/userActions";

@connect(function(store){
  return {
    user: store.user.user.name,
    tweets: store.tweets.tweets,
  };
})

export default class Dashboard extends React.Component {
  componentWillMount(){
  //  this.props.dispatch(fetchUser());
  }

  userButtonClicked(){
    this.props.dispatch(fetchUser());
    
  }

  render() {
    console.log(this.props.user);
    return (
      <div class="page-content-wrapper">
        <div class="container-fluid">
            <h1>Dashboard</h1>
            <button onClick={this.userButtonClicked.bind(this)}>fetchUser</button>
            <ul>
              <li>
                {this.props.user}
              </li>
            </ul>  
        </div>
      </div>
    );
  }
}
