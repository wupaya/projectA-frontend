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
 export class mHassa2 extends Component{
	render(){
		return(
		<h1>Hassan bla </h1>
		)
	}
 }
 export class StateExample extends Component{
	  constructor(props) {
		  super(props);
		  this.state = { text: "rakib" };
	  }
	  
	  baz() {
		  this.setState ({ text: "jabed" });
	  }
	  
	  render () {
		  return (
		  <div>
		  <button onClick={() => this.baz()}>baz</button>
		  <p>{this.state.text}</p>
		  </div>
		  );
	  }
  }

  export class ProdAPIExampleHassan extends Component{
	 
	  
	  baz() {
		 
          const url =
          'http://13.232.5.188/api/hassan/?num1=100&num2=200'
          
              $.ajax({
              url: url,
              dataType: 'json',
              cache: false,
              success: function(data) {
                this.setState({data: data});
              }.bind(this),
              error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
              }.bind(this)
            });
	  }
      
      state = {
        data: [],
      }
      
	  render () {
          const { data } = this.state
           return (
              <div>
              <button onClick={() => this.baz()}>Get DATA from APP server</button>
              
              <p>{data.datafromdatabase}</p>
              </div>
		  );
      } 
	  }	
	
  
			  
			  
			 
	
// export default Hassan;

