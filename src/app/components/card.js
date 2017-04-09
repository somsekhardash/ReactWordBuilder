import React from "react";

class card extends React.Component{
	render(){
		return(
			<div className="column">
				somse
				<div className="ui icon input fluid margin-bottom-25">
					<input type="text" placeholder="Word"/>
					<i className="icon"></i>
				</div>
				<div className="ui input fluid margin-bottom-25">
					<input type="text" placeholder="Meaning"/>
				</div>
				<div className="ui input fluid margin-bottom-25">
					<input type="text" placeholder="Example"/>
				</div>
				<div className="ui input fluid margin-bottom-25">
					<input type="text" placeholder="Synonyms"/>
				</div>
				{/*<ul className="parent no-padding">
					<li className="ui image label" ng-repeat="data in synonymsDatas">
								{{data}}
							<i className="delete icon" ng-click="deleteWord(data)"></i>	
						</li>
				</ul>
				<button className="ui primary button" ng-click="saveWord()">Save</button>
				<button className="ui secondary button" ng-click="createTest()">Test</button>
				<div className="ui toggle checkbox">
					<input type="checkbox" name="testSelect" ng-model="testSelect"/>
					<label>Test on meaning</label>
				</div>*/}
			</div>
		);
	}
}

export default card;