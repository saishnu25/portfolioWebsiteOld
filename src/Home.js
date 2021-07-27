import React from 'react';
import Navbar from './components/Navbar'; //Navbar Function
import Welcome from './components/Welcome'; //Welcome Function
import About from './components/About'; //About Function
import Projects from './components/Projects'; //Projects Function
import Updates from './components/Updates'; //Updates Function
import NavbarBot from './components/NavbarBot';

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
              <NavbarBot/>
            </div>
        )
    }

}

export default Home;

{/*
   *(Deployed: July 12th, 2021) 
   *(Updated: July 18th, 2021)
*/}