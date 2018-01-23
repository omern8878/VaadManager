import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class SideBarButton extends React.Component {

    render(){
        return(
            <Link to={this.props.link}>
                <Menu.Item name={this.props.name}>
                    <Icon name={this.props.icon} />
                    {this.props.text}
                </Menu.Item>
            </Link>
        );
    }

}
  
export default SideBarButton;