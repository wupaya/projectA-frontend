import React, {Component} from 'react';

export class Rakib1 extends Component{
	render(){
		return(
		<h1>Rakib1</h1>
		)
	}
 }
export class Rakib2 extends Component{
	render(){
		return(
		<h1>Rakib bla </h1>
		)
	}
 }
 export class Rakib3 extends Component{
	 render(){
		 return(
			 <h1>Rakib Brother </h1>
		 )
	 }
 }
	 
export class Rakib4 extends Component{
	 render(){
		 return(
			 <h1>Rakib Jabed </h1>
		 )
	 }
 }
 export class Rakib5 extends Component{
	 render(){
		 return(
			 <h1>Hobe Rakib,pain nai </h1>
		 )
	 }
 }
 export class Rakib6 extends Component{
	 render(){
		 return(
			 <h1>Rakib123</h1>
		 )
	 }
 }
 export class Rakib7 extends Component{
	render(){
		const{ username } = this.props;
		return(
		<h1> Aita notun ta vai {username}</h1>
        )
    }
  }
 export class Rakib8 extends Component{
	render(){
		const{ username } = this.props;
		return(
		<h1> done vai {username}</h1>
        )
    }
  }
  export class Rakib9 extends Component{
	render(){
		const{ username } = this.props;
		return(
		<h1>arekta banailam vai {username}</h1>
        )
    }
  }
  export class Rakib10 extends Component{
	render(){
		const{ username } = this.props;
		return(
		<h1>welcome back  {username}</h1>
        )
    }
  }
  export class StateExample extends Component{
	  constructor(props) {
		  super(props);
		  this.state = { text: "bat" };
	  }
	  
	  ban() {
		  this.setState ({ text: "ban" });
	  }
	  
	  render () {
		  return (
		  <div>
		  <button onClick={() => this.ban()}>ban</button>
		  <p>{this.state.text}</p>
		  </div>
		  );
	  }
  }
	
// export default Hassan;

