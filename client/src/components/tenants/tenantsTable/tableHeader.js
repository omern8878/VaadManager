import React from 'react';
import {Table} from 'semantic-ui-react';

const TenantsTableHeader = () => (
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell>מספר טלפון שני</Table.HeaderCell>
            <Table.HeaderCell>מספר טלפון</Table.HeaderCell>
            <Table.HeaderCell>כמות אנשים</Table.HeaderCell>
            <Table.HeaderCell>דירה</Table.HeaderCell>
            <Table.HeaderCell>קומה</Table.HeaderCell>
            <Table.HeaderCell>שם משפחה</Table.HeaderCell>
        </Table.Row>
    </Table.Header>
);

export default TenantsTableHeader;