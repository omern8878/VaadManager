import React from 'react';
import PropTypes from 'prop-types';
import {Table, Loader} from 'semantic-ui-react';
import TenantsTableRow from './tableRow';

class TenantsTableData extends React.Component{
    constructor(props){
        super(props);
    }

    createRow(tenant){
        return <TenantsTableRow key={tenant.id} tenant={tenant}/>;
    }

    render(){

        let tenantsRows = this.props.tenants.valueSeq().map(this.createRow);

        return(
            <Table.Body>
                {tenantsRows}
            </Table.Body>
        );
    }
}

TenantsTableData.propTypes = {
    tenants: PropTypes.object
};

export default TenantsTableData;