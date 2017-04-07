import React from "react";
import ReactDom from "react-dom";

import CardList from "./components/cardList";
import Ajax from "./components/Ajax";

class App extends React.Component{
	url = "https://jsonplaceholder.typicode.com/todos";
	method = "get";
	
	onSucess(newResponse){
		console.log(newResponse);
	}
	
	render(){
		return(
			<div className="parent">
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
				</div>
			</div>
		);
	}
}

var parent = window.document.getElementById("main");
ReactDom.render(<App/>,parent);