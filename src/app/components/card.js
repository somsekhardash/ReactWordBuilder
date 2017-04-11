import React from "react";

class card extends React.Component{
	constructor(props){
		super();
		this.state = {
			syno : ["som","sdas",1213]
		}
	}
	
	saveWord(){
		let theWord = {};
		theWord.word = this.state.word;
		theWord.meaning = this.state.meaning;
		theWord.example = this.state.example;
		theWord.synonyms = this.state.syn;
		this.props.words.data.push(theWord);
		this.props.wordAdded(this.props.words.data);
	}
			
	createTest(){
		alert("hu hu ");
	}
	
	wordChange(e){
		this.setState({
			word: e.target.value 
		})
	}
	
	MeaningChange(e){
		this.setState({
			meaning: e.target.value 
		})
	}
	
	exampleChange(e){
		this.setState({
			example: e.target.value 
		})
	}
	
	synChange(e){
		this.setState({
			syn: e.target.value 
		})
	}
	
	myFunction(e){
		if(e.which == 13){
			this.setState({
				syno: this.state.syno.concat(e.target.value)
			});
			e.target.value = "";	
		}	
	}
	
	deleteWord(word){
		let ind = this.state.syno.indexOf(word.target.dataset.name);
		this.state.syno.splice(ind,1);
		this.setState({
			syno: this.state.syno.splice("")
		});
	}
	
	render(){	
		return(
			<div className="column">
				<div className="ui icon input fluid margin-bottom-25">
					<input type="text" placeholder="Word" onBlur={this.wordChange.bind(this)}/>
					<i className="icon"></i>
				</div>
				<div className="ui input fluid margin-bottom-25">
					<input type="text" placeholder="Meaning" onBlur={this.MeaningChange.bind(this)}/>
				</div>
				<div className="ui input fluid margin-bottom-25">
					<input type="text" placeholder="Example" onBlur={this.exampleChange.bind(this)}/>
				</div>
				<div className="ui input fluid margin-bottom-25">
					<input type="text" placeholder="Synonyms"  onKeyPress={this.myFunction.bind(this)} onBlur={this.synChange.bind(this)}/>
				</div>
				<ul className="parent no-padding">
					{this.state.syno.map((item,i)=><li key={i} className="ui image label" >
						{item} <i className="delete icon" data-name={item} onClick={this.deleteWord.bind(this)}></i>
					</li>)}
				</ul>
				<button className="ui primary button" onClick={this.saveWord.bind(this)}>Save</button>
				<button className="ui secondary button" onClick={this.createTest}>Test</button>
				<div className="ui toggle checkbox">
					<input type="checkbox" name="testSelect"/>
					<label>Test on meaning</label>
				</div>
			</div>
		);
	}
}

export default card;