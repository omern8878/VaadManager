import { Sidebar, Menu } from 'semantic-ui-react';
import React from 'react';
import SideBarButton from './sideBarButton';
import SideBarUserCard from './sideBarUserCard';

class SideBarComponent extends React.Component{
    render(){
        return(
            <Sidebar id="side-bar-menu" as={Menu} animation='overlay' width='thin' direction='right'
                visible={true} icon='labeled' vertical inverted>
                <SideBarUserCard />
                <SideBarButton link='/' name='home' icon='home' text='בית' />
                <SideBarButton link='/tenants' name='tenants' icon='users' text='דיירים' />
                <SideBarButton link='/payments' name='home' icon='usd' text='תשלומים' />
                <SideBarButton link='/suppliers' name='home' icon='home' text='ספקים' />
                <SideBarButton link='/reports' name='home' icon='file text outline' text='דוחות' />
                <SideBarButton link='/events' name='home' icon='home' text='אירועים' />
                <SideBarButton link='/offers' name='home' icon='calendar' text='הצעות' />
            </Sidebar>
        );
    }
}

export default SideBarComponent;