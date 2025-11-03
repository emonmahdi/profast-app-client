import React from 'react'
import useUserRole from '../../../hooks/useUserRole'
import DashboardUser from './DashboardUser';
import DashboardRider from './DashboardRider';
import DashboardAdmin from './DashboardAdmin';
import Forbidden from '../../Forbidden';

const DashboardHome = () => {
    const {role, roleLoading} = useUserRole();

    if(!roleLoading && role === 'user'){
        return <DashboardUser />
    }
    if(!roleLoading && role === 'rider'){
        return <DashboardRider />
    }
    if(!roleLoading && role === 'admin'){
        return <DashboardAdmin />
    }

  return  <Forbidden />
}

export default DashboardHome