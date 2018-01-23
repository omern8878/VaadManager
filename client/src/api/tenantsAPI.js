const TenantsAPI = {
    getAllTenants: (buildingId) => {
        return([
            {
                id: 0,
                familyName: 'Nachtigal',
                floor: 4,
                appartment: 15,
                peopleAmount: 6,
                phoneNumber: '054-4322201',
                secondPhoneNumber: '052-4473591'
            },
            {
                id: 1,
                familyName: 'Meir',
                floor: 4,
                appartment: 16,
                peopleAmount: 5,
                phoneNumber: '054-4444444',
                secondPhoneNumber: '052-4999999'
            }
        ]);
    }
};

export default TenantsAPI;