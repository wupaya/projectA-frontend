import React, {Component} from 'react';
import * as hassan from './hassan';
import * as sajjjad from './sajjjad';
import * as Rishat from './rishat';
import * as Arifa from './arifa';
import * as Rakib from './rakib';
import * as Riyadh from './riyadh';


class App extends Component {
	
	removeCharacter = index => {
		const { characters } = this.state;

		this.setState({
			characters: characters.filter((character, i) => { 
				return i !== index;
			})
		});
	}
    state = {
			data: [
			]        
		};
	    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "http://example.com/param/";

        fetch(url,{
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({
			"param1":"hello",
			"param2":"world"
			})
		})
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result["message"]
                })
            });
			// const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

        // fetch(url)
            // .then(result => result.json())
            // .then(result => {
                // this.setState({
                    // data: result
                // })
            // });
    }

	render() {
        const { data } = this.state;

        // const result = data.map((entry, index) => {
            // return <li key={index}>{entry}</li>;
        // });

        return (
        <div>
			<div className="jumbotron">
				<h1>Welcome to Test Project</h1> 
				<p>This project is for demonestration purpose only.</p> 
			</div>
					<Login value="some value"/>
					<HelloComponent />
					<Table />
					<Hello2Component />
					<Hello3Component />
					<Hello4Component user="Riyadh" />
					<Hello4Component user="Hassan" />
					<Hello5Component myheadline="Welcome to react pros"/>
					<sajjjad.Hello2BySajjad/>
					<sajjjad.Hello4BySajjad/>
					<sajjjad.Hello6BySajjad/>
					<sajjjad.Hello3BySajjad/>
					<sajjjad.Hello11BySajjad/>
					<sajjjad.mdsajjadalisheikh/>
					<sajjjad.hmmm username={"Sajjad"}/>
					<sajjjad.hmmm username={"Hassan"}/>
					<sajjjad.hmmm username={"Riyadh"}/>
					<sajjjad.fantastick username={"Sajjad"}/>
					<sajjjad.fantastick username={"Hassan"}/>
					<sajjjad.fantastick username={"Riyadh"}/>
					<sajjjad.odvut username={"Sajjad"}/>
					<sajjjad.odvut username={"Hassan"}/>
					<sajjjad.odvut username={"Riyadh"}/>
					<sajjjad.bookself username={"Sajjad"}/>
					<sajjjad.bookself username={"Hassan"}/>
					<sajjjad.bookself username={"Riyadh"}/>
					<hassan.Hassan/>
					<Rishat.rishat1/>
					<Rishat.rishat2/>
					<hassan.mHassa2/>
                    <Arifa.arifa1/>
                    <Arifa.arifa2/>
					<Rakib.Rakib1/>
					<Rakib.Rakib2/>
                    <Arifa.arifa3/>
					
                    
		</div>
          // <p>This is some text.</p> 
          // <p>This is another text.</p>
          // <div>
            // <ul>{data}</ul>
            
            // <InstitutePageManagement />
          // </div>
        );
    }
}


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:"some arbitary value",
        };
    }
    render(){
        return (
            <form action="#">
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">**</div>
        </div>
        <input type="password" class="form-control" id="inlineFormInputGroup" placeholder="Password" />
      </div>
    </div>
    <div class="col-auto">
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck" />
        <label class="form-check-label" for="autoSizingCheck">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </div>
</form>
        // <form action="#">
        // <input 
        // type="text" 
        // value={this.state.value}
        // onClick={() => this.setState({value: 'X'})}
        // /><br />
        // <input 
        // type="text" 
        // value={this.state.value}
        // />
        // </form>
        );
    }
}

class SignUp extends Component{
    render(){
        return (
            <form>
                Name:
                <input type="text" name="name" /><br />
                Email:
                <input type="text" name="email" /><br />
                Phone:
                <input type="text" name="phone" /><br />
                Password:
                <input type="text" name="password" />
            </form>
        );
    }
}


class InstitutePageManagement extends Component{
    render(){
        return (
            <div>
                <button>Create a page</button>
                <CreateInstitutePageForm />
            </div>
        );
    }
}

class CreateInstitutePageForm extends Component{
    render(){
        return (
            <div>
                <form>
                    Institute Name:<input type="text" name="name" /><br />
                    Address: <input type="text" name="address" /><br />
                    Founded Year: <input type="text" name="founded year" /><br />
                    Description: <input type="text" name="description" />
                </form>
            </div>
        );
    }
}
class HelloComponent extends Component{
	render(){
		return(
			<p>Hello World</p>
		)
	}
}
class Hello2Component extends Component{
	render(){
		return(
			<p>Hello World one more Time</p>
		)
	}
}

class Hello3Component extends Component{
    render(){
		return(
			<h1>Hello heading</h1> 
			)
     }
}
class Hello4Component extends Component{
    render(){
		return(
			<p>Hello{this.props.user}</p>
			)
     }
}
class Table extends Component {
    render() {
        return (
               <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}
class TableHeader extends Component{
	render () {
		return(
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
			)
	}
}
class TableBody extends Component{
	render () {
		return(
			<tbody>
				<tr>
					<td>Charlie</td>
					<td>Janitor</td>
				</tr>
				<tr>
					<td>Mac</td>
					<td>Bouncer</td>
				</tr>
				<tr>
					<td>Dee</td>
					<td>Aspiring actress</td>
				</tr>
				<tr>
					<td>Dennis</td>
					<td>Bartender</td>
				</tr>
			</tbody>
		)
	}
}

class Hello5Component extends Component{
	render () {
		return(
		<h1> {this.props.myheadline} </h1>
		)
	}
}



export default App;
