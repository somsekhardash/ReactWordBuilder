import React from "react";

class Ajax extends React.Component{
	
	myAjax(method,url) {
		return new Promise(function(resolve, reject){
			let req = new XMLHttpRequest();
			req.open(method, url);
			req.onload = function(){
				req.status == 200 ?  resolve(req.response) : reject(req.response);
			};
			req.onerror = function(){
				reject(req.response);
			};
			req.send();
		});
	}
	
	
	getAlert(){
		var promise = this.myAjax(this.props.method,this.props.url);
		promise.then(
			event => {this.props.onResponse(JSON.parse(event));}
		);
	}
		
	render(){
		if(this.props.auto){
			this.getAlert();
		}
		return(<div></div>);
	}
	
}

export default Ajax;