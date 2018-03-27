//this is a child component

import React, {Component} from 'react';


class Route1 extends Component {
    constructor(props){
        super(props);

        this.state = {
            people:{
                'Shea'
                'Erik'
                'Larry'
                'Jin'
            }

        }
    }














    render(){
        return (
            <h1>I am Route1 </h1>
        )
    }


}



export default Route1