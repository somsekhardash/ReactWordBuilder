import React from "react";
import { render } from "react-dom";

import { cardList } from "./components/cardList";

class App extends React.Component{
	render(){
		return(
			<div className="parent">
				<div className="child1">
					<h3> bring me back </h3>
				</div>
				<div className="child2">
					<cardList/>
				</div>
			</div>
		);
	}
}

var parent = window.document.getElementById("main");
render(<App/>,parent);