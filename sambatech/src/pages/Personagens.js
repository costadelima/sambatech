import React, { Component } from 'react';
import '../CSS/Personagens.css';


class Personagens extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://www.breakingbadapi.com/api/characters')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }



    render(){
        var { isLoaded, items } = this.state; 

        if(!isLoaded) {
            return <div>Loading...</div>
        }else {
            return (
                <div className="Personagens">
                    <h1>Personagens</h1>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                Nmae: {item.name}
                            </li>
                        ))};
                    </ul>
                </div>
            );
        }

    }
}

export default Personagens;