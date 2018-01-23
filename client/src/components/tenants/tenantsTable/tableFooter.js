import React from 'react';
import {Table, Button, Icon} from 'semantic-ui-react';

class TenantsTableFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='4'>
                        <Button floated='right' icon labelPosition='left' primary size='small'
                                onClick={this.props.openNewTenantModal}>
                            <Icon name='user' /> Add User
                        </Button>
                        <Button size='small'>Approve</Button>
                        <Button disabled size='small'>Approve All</Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        );
    }

}
export default TenantsTableFooter;