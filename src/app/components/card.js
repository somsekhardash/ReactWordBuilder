import React from "react";

class card extends React.Component{
	constructor(props){
		super();
		this.state = {
			syno : [],
			word: "",
			meaning: "",
			example: ""
		}
	}
	saveWord(){
		let theWord = {};
		theWord.synonyms = [];
		theWord.word = this.state.word;
		theWord.meaning = this.state.meaning;
		theWord.example = this.state.example;
		theWord.synonyms=this.state.syno.splice("");

		if(!!theWord.word && !!theWord.meaning){
			this.props.words.data.push(theWord);
			this.props.wordAdded(this.props.words.data);
			this.updateWord({
				synonyms : [],
				word: "",
				meaning: "",
				example: ""
			});
		} else {
			alert("bang")
		}
	}
	
	updateWord(node){
		this.setState({
			word: node.word,
			meaning: node.meaning,
			example: node.example,
			syno: node.synonyms.splice("")
		})
	}
	
	createTest(){
		this.props.onShowModel();
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
			syno: e.target.value 
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
					<input type="text" placeholder="Word" value={this.state.word}  onChange={this.wordChange.bind(this)}/>
					<i className="icon"></i>
				</div>
				<div className="ui input fluid margin-bottom-25">
					<input type="text" placeholder="Meaning" value={this.state.meaning} onChange={this.MeaningChange.bind(this)}/>
				</div>
				<div className="ui input fluid margin-bottom-25">
					<input type="text" placeholder="Example" value={this.state.example} onChange={this.exampleChange.bind(this)}/>
				</div>
				<div className="ui input fluid margin-bottom-25">
					<input type="text" placeholder="Synonyms" onKeyPress={this.myFunction.bind(this)}/>
				</div>
				<ul className="parent no-padding">
					{this.state.syno.map((item,i)=><li key={i} className="ui image label" >
						{item} <i className="delete icon" data-name={item} onClick={this.deleteWord.bind(this)}></i>
					</li>)}
				</ul>
				<button className="ui primary button" onClick={this.saveWord.bind(this)}>Save</button>
				<button className="ui secondary button" onClick={this.createTest.bind(this)}>Test</button>
				<div className="ui toggle checkbox">
					<input type="checkbox" name="testSelect"/>
					<label>Test on meaning</label>
				</div>
			</div>
		);
	}
}

export default card;