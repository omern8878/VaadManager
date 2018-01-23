import React from 'react';
import {receivedTenants, addTenant} from '../actions/tenantsActions';
import TenantsTableComponent from '../components/tenants/tenantsTable/index';
import {connect} from 'react-redux';
import NewTenantModal from '../components/tenants/newTenantModal/index';
import TenantsAPI from '../api/tenantsAPI';

class TenantsContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {isNewTenantModalOpen: false};
        this.openNewTenantModal = this.openNewTenantModal.bind(this);
        this.closeNewTenantModal = this.closeNewTenantModal.bind(this);
        this.init(props);
    }

    init(props){
        if(props.tenants.size === 0){
            let tenants = TenantsAPI.getAllTenants();
            props.receivedTenantsData(tenants);
        }
    }

    openNewTenantModal(){
        this.setState({isNewTenantModalOpen: true});
    }

    closeNewTenantModal(){
        this.setState({isNewTenantModalOpen: false});
    }

    render(){
        return(
            <div>
                <NewTenantModal
                    isOpen={this.state.isNewTenantModalOpen}
                    onClose={this.closeNewTenantModal}
                />
                <TenantsTableComponent
                    openNewTenantModal={this.openNewTenantModal}
                    tenants={this.props.tenants}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        tenants: state.tenants
    });
};

const mapDispatchToProps = (dispatch) =>({
    addNewTenant: (tenant) => dispatch(addTenant(tenant)),
    receivedTenantsData: (tenants) => dispatch(receivedTenants(tenants))
});

TenantsContainer = connect(mapStateToProps, mapDispatchToProps)(TenantsContainer);

export default TenantsContainer;
