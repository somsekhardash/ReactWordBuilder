import React from "react";
import ReactDom from "react-dom";

import CardList from "./components/cardList";
<<<<<<< HEAD
import Card from "./components/card";
import Ajax from "./components/Ajax";

class App extends React.Component{
	url = "https://api.myjson.com/bins/z845t";
	method = "get";

	constructor(){
		super();
		this.state = {
			temp : {}
		}
	}

	onSucess(newResponse){
		this.setState({
			temp: {data: newResponse}
		})
	}		
=======
import Ajax from "./components/Ajax";

class App extends React.Component{
	url = "https://jsonplaceholder.typicode.com/todos";
	method = "get";
	
	onSucess(newResponse){
		console.log(newResponse);
	}
>>>>>>> e71e5b7c7249d914c1a527c2d2d32641fb81c671
	
	render(){
		return(
			<div className="parent">
<<<<<<< HEAD
				<div className="ui two column doubling stackable grid container padding-top-25">
					<div className="child1">
						<Card/>
					</div>
					<div className="child2">		
						<Ajax 
							ref="ajax"
							url={this.url} 
							method= {this.method}
							onResponse = {this.onSucess.bind(this)}
						/>
						<CardList words={this.state.temp}/>		
						<button onClick={() => this.refs.ajax.getAlert()}>Fire</button> 
					</div>
=======
				<div className="child1">
					<h3> bring me back </h3>
				</div>
				<div className="child2">
					<CardList/>				
					<Ajax 
						ref="ajax"
						url={this.url} 
						method= {this.method}
						onResponse = {this.onSucess}
					/>
					<button onClick={() => this.refs.ajax.getAlert()}>Fire</button> 
>>>>>>> e71e5b7c7249d914c1a527c2d2d32641fb81c671
				</div>
			</div>
		);
	}
}

var parent = window.document.getElementById("main");
ReactDom.render(<App/>,parent);