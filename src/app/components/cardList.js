import React from "react";

class cardList extends React.Component{
		constructor(props){
			super();
			this.state = {
				acivate : false,
				showItem : true
			}
		}

		deleteIt(event){
			this.props.words.data.splice(event.target.dataset.item,1);
			this.props.itemDeleted(this.props.words.data);
		} 
		
		UpdateIt(event){
			this.props.itemToUpdate(this.props.words.data[event.target.dataset.item]);
			this.props.words.data.splice(event.target.dataset.item,1);
			this.props.itemDeleted(this.props.words.data);
		}
		
		showThis(event){
			// if(event.target.parentNode.parentNode.classList.contains("active"))
			// 	event.target.parentNode.parentNode.classList.remove("active");
			// else 
			// 	event.target.parentNode.parentNode.classList.add("active");
				
			// if(event.target.parentNode.nextElementSibling.classList.contains("hide"))
			// 	event.target.parentNode.nextElementSibling.classList.remove("hide");
			// else
			// 	event.target.parentNode.nextElementSibling.classList.add("hide");	

			this.setState({
				acivate: !this.state.acivate,
				showItem: !this.state.showItem
			})
		}		
		
	    render(){
		let content= <div></div>,
			isActive = this.state.acivate,
			showItem = this.state.showItem ;

		if(!!this.props.words.data){	
            content = this.props.words.data.map((item,i) => 
				<div key={i} className="full-width padding-bottom-10">
					<div className={isActive ? 'active ui card full-width' : 'ui card full-width'}>
						<div className="content">
							<div className="header col-lg-8 no-padding pointer" onClick={this.showThis.bind(this)}>{item.word}</div>
							<button className="btn btn-danger btn-xs orange" data-item={i} onClick={this.deleteIt.bind(this)}>Delete</button>
							<button className="btn btn-primary btn-xs" data-item={i} onClick={this.UpdateIt.bind(this)}>Update</button>
						</div>
						<div className={showItem ? 'content no-up-border hide' : 'content no-up-border'}>
							<div className="full-width col-lg-12 no-padding">								
								<h4 className="ui sub header blue">{item.meaning}</h4>
								<div className="ui small feed">
									<div className="event">
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
					</div>
				</div>
            );
        };
		return(<div>{content}</div>);
    }
}

export default cardList;