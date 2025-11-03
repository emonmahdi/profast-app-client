import React from 'react'
import { useAuth } from '../hooks/useAuth'
import useUserRole from '../hooks/useUserRole';
import { Navigate } from 'react-router';

const RiderRoute = ({children}) => {
    const {user,loading} = useAuth();
    const {role, roleLoading} = useUserRole();


    if(loading || roleLoading){
    return <p>Loading Rider.............</p>
    }

    if(!user || role !== "rider"){
      return <Navigate state={{from: location.pathname}} to="/forbidden" />
    }
    

    return children
}

export default RiderRoute