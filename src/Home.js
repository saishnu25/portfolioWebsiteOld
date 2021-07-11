import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Updates from './components/Updates';

class Home extends React.Component{
    constructor(props){ 
        super(props);
        this.state = {

        };
    }

    render(){
        {}
        return(
            <div>
              <Navbar/>
              <About/>
              <Projects/>
              <Updates/>
            </div>
        )
    }

}

export default Home;