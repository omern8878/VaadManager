import {Map} from 'immutable';

const tenantsReducer = (state = new Map(), action) => {
    switch(action.type){
        case 'RECEIVED_TENANTS':
            return new Map().withMutations(map => {
               action.payload.tenants.forEach( tenant => {
                   map.setIn([tenant.id], tenant);
               })
            });
        case 'ADD_TENANT':
            return state.setIn([action.payload.tenant.id], action.payload.tenant);
        default:
            return state;
    }
};

export default tenantsReducer;