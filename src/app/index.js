import React from "react";
import ReactDom from "react-dom";

import CardList from "./components/cardList";
import Card from "./components/card";
import Ajax from "./components/Ajax";
import TestLayout from "./components/testLayout";


class App extends React.Component{
	url = "https://api.myjson.com/bins/z845t";
	method = "get";

	constructor(){
		super();
		this.state = {
			temp : {},
			auto: true,
			showWord: {}
		}
	}

	onSucess(newResponse){
		this.setState({
			temp: {data: newResponse},
			auto: false
		})
	}	

	onShowModel(mewData){
		let item = document.getElementById("modelBox");
			if(item.classList.contains("active"))
				item.classList.remove("active");
			else 
				item.classList.add("active");
	}

	itemDeleted(newData){
		this.setState({
			temp: {data: newData}
		})
	}	
	
	itemToUpdate(node){
		this.refs.card.updateWord(node);
	}
	
	hideModel(e){
		let temp = e.target.className.split(" ");
		if(temp.indexOf("active") > -1) {
			let item = document.getElementById("modelBox");
			if(item.classList.contains("active"))
				item.classList.remove("active");
			else 
				item.classList.add("active");
		}
	}

	render(){
		return(
			<div className="parent">
				<div className="ui two column doubling stackable grid container padding-top-25">
					<div className="column">
						<Card words={this.state.temp}
							  wordAdded={this.onSucess.bind(this)}
							  ref = "card"
							  onShowModel = {this.onShowModel.bind(this)}/>
					</div>
					<div className="column">				
						<CardList 
							words={this.state.temp} 
							wordAdded={this.onSucess.bind(this)}
							itemDeleted = {this.itemDeleted.bind(this)}
							itemToUpdate = {this.itemToUpdate.bind(this)}
						/>		
					</div>	
					<div className="modelBox" id="modelBox" onClick={this.hideModel} >
						<TestLayout
							words={this.state.temp}
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