import React from 'react';
import Navbar from './components/Navbar'; //Navigation Bar import
import About from './components/About'; //About import
import Project from './components/Projects'; //Project import
import Updates from './components/Updates'; //Update import

class Home extends React.Component{
    constructor(props){ 
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
               <Navbar/>
               <About/>
               <Project/>
               <Updates/>
            </div>
        )
    }

}

export default Home;