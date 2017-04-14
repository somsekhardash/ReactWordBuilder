import React from "react";

class cardList extends React.Component{
		deleteIt(event){
			this.props.words.data.splice(event.target.dataset.item,1);
			this.props.itemDeleted(this.props.words.data);
		} 
		
		UpdateIt(event){
			this.props.itemToUpdate(this.props.words.data[event.target.dataset.item]);
			this.props.words.data.splice(event.target.dataset.item,1);
			this.props.itemDeleted(this.props.words.data);
		}
		
	    render(){
		let content= <div></div>;
		if(!!this.props.words.data){
			console.log(this.props.words.data);
            content = this.props.words.data.map((item,i) => 
				<div key={i} className="col-lg-6">
					<div className="ui card margin-bottom-25">
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
								{item.synonyms.map((word,j) => <li key={j} className="ui image label">
								{word}</li>)}
							</ul>
						</div>
						<div className="extra content">
							<button className="ui button orange" data-item={i} onClick={this.deleteIt.bind(this)}>Delete</button>
							<button className="ui button teal" data-item={i} onClick={this.UpdateIt.bind(this)}>Update</button>
						</div>
					</div>
				</div>
            );
        };
		return(<div>{content}</div>);
    }
}

export default cardList;