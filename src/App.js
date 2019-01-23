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
            <ul>{data}</ul>
            <Login value="some value"/>
            <InstitutePageManagement />
        </div>
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
        <input 
        type="text" 
        value={this.state.value}
        onClick={() => this.setState({value: 'X'})}
        /><br />
        <input 
        type="text" 
        value={this.state.value}
        />
        </form>
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


export default App;