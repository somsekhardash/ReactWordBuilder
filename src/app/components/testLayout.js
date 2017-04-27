import React from "react";

class testLayout extends React.Component{
	constructor(props){
		super();
		this.state = {
			word : "",
			meaning : ""
		}
	}

	startTest(e){
		let arrayTemp = this.props.words.data,
			rIndex  = Math.floor(Math.random()*arrayTemp.length);
			this.setState({
				word: arrayTemp[rIndex].word,
				meaning: arrayTemp[rIndex].meaning
			});
	}

	showResult(e){
		let node = document.getElementById("resultShow");
		if(node.classList.contains("hide")) 
			node.classList.remove("hide");
		else 
			node.classList.add("hide")
	}	

	render(){	
		return(
			<div className="parent">
				<div className="parent_block">	
					<div className="wordName">
						{this.state.word}
					</div>
					<div id="resultShow" className="meaning hide">
						{this.state.meaning}
					</div>
				</div>	
				<div className="allignCenter">	
					<button className="ui primary button" onClick={this.startTest.bind(this)}>Lets Go</button>
					<button className="ui secondary button" onClick={this.showResult.bind(this)}>Show Result</button>
				</div>
			</div>
		);
	}
}

export default testLayout;