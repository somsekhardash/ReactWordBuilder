import React from "react";
var cardList = React.createClass({
    render : function(){
		
        let content= <div></div>;
		if(this.props.words.data){
            content = this.props.words.data.map((item,i) => 
				<div key={i} className="col-lg-6">
					<div className="ui card">
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

export default cardList;