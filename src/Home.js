import React from 'react';

const colors = ["black", "white", "yellow", "blue"]

let someFunc = () => {

}

class Home extends React.Component{
    constructor(props){ 
        super(props);
        this.state = {
          colorIndex: 0
        };

        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(){
      this.setState((prevState) => {
        return {colorIndex: (prevState.colorIndex + 1) % 4}
      })
    }

    render(){
        {console.log(this.state.colorIndex)}
        return(
            <div style = {{backgroundColor: colors[this.state.colorIndex]}}>
                <h2>This is our home page!</h2>
                {console.log("Hello World")}
                <button onClick = {this.changeColor}>WOW AMAZING</button>
                {/*This is a comment*/}
            </div>
        )
    }

}

export default Home;