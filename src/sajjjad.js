import React, {Component} from 'react';
export class HelloBySajjad extends Component{
	render () {
		return(
		<h1>Hello By Sajjad</h1>
		)
	}
}
export class Hello2BySajjad extends Component{
	render(){
		return(
		<h1>Hello Again By Sajjad</h1>
		)
	}
}
export class Hello4BySajjad extends Component{
	render(){
		return(
		<h1>Helloo again By Sajjad</h1>
		)
	}
}
export class Hello5BySajjad extends Component{
	render(){
		return(
		<h1>Hello again By Sajjad</h1>
		)
	}
}
export class Hello6BySajjad extends Component{
	render(){
		return(
		<h1>Make it easy Sajjad</h1>
		)
	}
	}

export class Hello3BySajjad extends Component{
	render(){
		return(
		<h1>Hello Again By Sajjad</h1>
		)
	}
 }
 export class Hello8BySajjad extends Component{
	render(){
		return(
		<h1>frubary 21 </h1>
		)
	}
 }
 export class Hello11BySajjad extends Component{
	render(){
		return(
		<h1>frubary 121 </h1>
		)
	}
 }
 export class mdsajjadalisheikh extends Component{
	render(){
		return(
		<h1>i love you </h1>
		)
	}
 }
  export class hmmm extends Component{
	render(){
		const{ username } = this.props;
		return(
		<h1>i hate yoou {username}</h1>
		)
	}
 }

  export class fantastick extends Component{
	render(){
		const{ username } = this.props;
		return(
		<h1>nmp start {username}</h1>
		)
	}
 }
  export class odvut extends Component{
	render(){
		const{ username } = this.props;
		return(
		<h1>kaj hoi na {username}</h1>
		)
	}
 }

  export class bookself extends Component{
	render(){
		const{ username } = this.props;
		return(
		<h1> pen is power {username}</h1>
        )
    }
  }
  export class pain extends Component{
	render(){
		const{ username } = this.props;
		return(
		<h1>kaj hoi naaaaa {username}</h1>
		)
	}
 }
  export class StateExample extends Component{
	  constructor(props) {
		  super(props);
		  this.state = { text: "bar" };
	  }
	  
	  baz() {
		  this.setState ({ text: "baz" });
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
  export class sajjadexamplebysheikh extends Component{
 
  baz() {
	  const url =
	   'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
	   $.ajax({
		   url:url,
		   dataType: 'json',
		   cache: false,
		   success: function(data){
			   this.setState({data: data});
		   }.bind(this),
		   error: function(xhr, status,err){
			   console.error(this.props.url,status,err.toString());
		   }.bind(this)
	   });
  }
  state = {
	  data: [],
  }
  render () {
	  const { data } = this.state
	  
	  const result = data.map ((entry,index) =>{
		  return<li key={index}>{entry}</li>
	  })
	  return(
	  <div>
	  <button onClick={() =  this.baz()}>Load and Show Data From Remote Server</button>
	  <ul>{result}</ul>
	  </div>
	  );
  }
  }
  
	
 