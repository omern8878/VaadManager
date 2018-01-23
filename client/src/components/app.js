import React from 'react';
import SideBarComponent from './sideBar/index';
import Content from './content';

class App extends React.Component{

    render(){
        return(
            <div id="app">
                <SideBarComponent/>
                <Content/>
            </div>
        );
    }

}

export default App;