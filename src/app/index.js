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
			temp : {},
			auto: true
		}
	}
	
	onSucess(newResponse){
		this.setState({
			temp: {data: newResponse},
			auto: false
		})
	}		
	
	render(){
		return(
			<div className="parent">
				<div className="ui two column doubling stackable grid container padding-top-25">
					<div className="column">
						<Card words={this.state.temp}
							  wordAdded={this.onSucess.bind(this)}/>
					</div>
					<div className="column">				
						<CardList 
							words={this.state.temp} 
							wordAdded={this.onSucess.bind(this)}
						/>		
					</div>	
					
					<Ajax 
						auto={this.state.auto} 
						ref="ajax"
						url={this.url} 
						method= {this.method}
						onResponse = {this.onSucess.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

var parent = window.document.getElementById("main");
ReactDom.render(<App/>,parent);