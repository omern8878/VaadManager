import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class SideBarUserCard extends React.Component{
  
  render(){
    return(
      <Card color="red">
        <Image src='/photos/background.jpg' />
        <Card.Content>
          <Card.Header>
            Yoni Netanyahu 11
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            Petah Tikva
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Tenants
          </a>
        </Card.Content>
      </Card>
    );
  }

}

export default SideBarUserCard;
