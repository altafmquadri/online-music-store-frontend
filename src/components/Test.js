import React, { Component } from 'react';

class Test extends Component {
    state = {  }

    componentDidMount() {
        fetch("http://localhost:8080/api/hello-world").then(res => res.json()).then(data => console.log(data))
    }
    render() { 
        return ( <div>

        </div> );
    }
}
 
export default Test;