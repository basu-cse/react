import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Basudev'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Basudev'
            });
        },3000);
    }
    render() {
        return (
        <div>I am the Parent component.
            <PureComp name = { this.state.name} />
            <RegComp name = { this.state.name } />
        </div>
        )
    }
}

export default ParentComp;