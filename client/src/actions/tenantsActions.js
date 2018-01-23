export const addTenant = (tenant) => ({
    type: 'ADD_TENANT',
    payload: {
        tenant
    }
});

export const receivedTenants = (tenants) => ({
   type: 'RECEIVED_TENANTS',
   payload: {
       tenants
   } 
});