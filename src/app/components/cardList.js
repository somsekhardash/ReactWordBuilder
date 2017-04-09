import React from "react";
<<<<<<< HEAD
var cardList = React.createClass({
    render : function(){
        let content= <div></div>;
		if(this.props.words.data){
            content = this.props.words.data.map((item,i) => 
				<div key={i}>
					<div className="ui card full-width">
						<div className="content">
							<div className="header">{item.word}</div>
						</div>
						<div className="content">
							<h4 className="ui sub header blue">{item.meaning}</h4>
							<div className="ui small feed">
							<div className="event">
								<div className="content">
								<div className="summary">
									{item.example}
								</div>
								</div>
							</div>
							</div>
							<ul className="parent no-padding margin-bottom-0">
								<li className="ui image label">
										
								</li>
							</ul>
						</div>
						<div className="extra content">
							<button className="ui button orange">Delete</button>
							<button className="ui button teal">Update</button>
						</div>
					</div>
				</div>
            );
        };
		return(<div>{content}</div>);
    }
});
=======

class cardList extends React.Component{
	render(){
		return(
			<div className="som">
				<h3> som </h3>
			</div>	
		);
	}
}
>>>>>>> e71e5b7c7249d914c1a527c2d2d32641fb81c671

export default cardList;