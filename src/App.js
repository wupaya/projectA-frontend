import React, {Component} from 'react';


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
            <h1>Hello world</h1> 
            <h1>Welcome to Test Project</h1> 
            <p>This project is for demonestration purpose only.</p> 
        </div>
<Login value="some value"/>
<HelloComponent />
<Hello3Component/>
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
        return (
            <p>Hello World</p>
        )
    }
}
class Hello3Component extends component{
	render(){
		return(
		<h1>Hello heading</h1>
		)
	}
}
export default App;