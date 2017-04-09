import React from "react";
import ReactDom from "react-dom";

import CardList from "./components/cardList";
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
	
	render(){
		return(
			<div className="parent">
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
				</div>
			</div>
		);
	}
}

var parent = window.document.getElementById("main");
ReactDom.render(<App/>,parent);