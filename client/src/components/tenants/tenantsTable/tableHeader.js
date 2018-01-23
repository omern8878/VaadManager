import React from 'react';
import {Table} from 'semantic-ui-react';

const TenantsTableHeader = () => (
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Registration Date</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
        </Table.Row>
    </Table.Header>
);

export default TenantsTableHeader;