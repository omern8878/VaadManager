import React from 'react';
import PropTypes from 'prop-types';
import {Table, Loader} from 'semantic-ui-react';
import TenantsTableRow from './tableRow';

class TenantsTableData extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.tenants.size === 0){
            return(
                <Table.Body>

                </Table.Body>
            );
        }
        return(
            <Table.Body>
                {
                    this.props.tenants.map(tenant => {
                        console.log(tenant);
                        return <TenantsTableRow key={tenant.id} tenant={tenant}/>;
                    })
                }
            </Table.Body>
        );
    }
}

TenantsTableData.propTypes = {
    tenants: PropTypes.object
};

export default TenantsTableData;