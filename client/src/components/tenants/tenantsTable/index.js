import React from 'react';
import {Table, Container} from 'semantic-ui-react';
import TenantsTableHeader from './tableHeader';
import TenantsTableData from './tableData';
import TenantsTableFooter from './tableFooter';

class TenantsTableComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Table compact celled>
                    <TenantsTableHeader/>
                    <TenantsTableData tenants={this.props.tenants}/>
                    <TenantsTableFooter openNewTenantModal={this.props.openNewTenantModal}/>
                </Table>
            </Container>
        );
    }
}

export default TenantsTableComponent;
