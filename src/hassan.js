import React, {Component} from 'react';
import $ from 'jquery';

export class Hassan extends Component{
	render(){
		return(
		<h1>Hassan </h1>
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


  export class ApiExampleByHassan extends Component{
	  // constructor(props) {
		  // super(props);
		  // this.state = { text: "bar" };
	  // }
	  
	  baz() {
		  //this.setState ({ text: "baz" });
          const url =
          'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        // fetch(url)
          // .then(result => result.json())
          // .then(result => {
            // this.setState({
              // data: result,
            // })
          // })
          
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

          const result = data.map((entry, index) => {
              return <li key={index}>{entry}</li>
            })

           return (
              <div>
              <button onClick={() => this.baz()}>Load and Show Data From Remote Server</button>
              <ul>{result}</ul>
              </div>
		  );
      }
		  
	  }


  export class ProdAPIExampleHassan extends Component{
	  // constructor(props) {
		  // super(props);
		  // this.state = { text: "bar" };
	  // }
	  
	  baz() {
		  //this.setState ({ text: "baz" });
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
	