import React from 'react';
import Navbar from './components/Navbar'; //Navbar Function
import Welcome from './components/Welcome'; //Welcome Function
import About from './components/About'; //About Function
import Projects from './components/Projects'; //Projects Function
import Updates from './components/Updates'; //Updates Function

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
              <Welcome/>
              <About/>
              <Projects/>
              <Updates/>
            </div>
        )
    }

}

export default Home;