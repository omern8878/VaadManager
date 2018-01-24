import React from 'react';
import {Table} from 'semantic-ui-react';

class TenantsTableRow extends React.Component{

    render(){
        let {tenant} = this.props;
        return(
            <Table.Row>
                <Table.Cell>{tenant.secondPhoneNumber}</Table.Cell>
                <Table.Cell>{tenant.phoneNumber}</Table.Cell>
                <Table.Cell>{tenant.peopleAmount}</Table.Cell>
                <Table.Cell>{tenant.appartment}</Table.Cell>
                <Table.Cell>{tenant.floor}</Table.Cell>
                <Table.Cell>{tenant.familyName}</Table.Cell>
            </Table.Row>
        );
    }

}

export default TenantsTableRow;