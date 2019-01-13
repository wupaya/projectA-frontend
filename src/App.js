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
        const url = "http://localhost:8000/param/";

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

        return <ul>{data}</ul>;
    }
}

export default App;