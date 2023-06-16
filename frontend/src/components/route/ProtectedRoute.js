import React, { Fragment, useEffect } from 'react'
import { Route, Redirect, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../actions/userActions'

const ProtectedRoute = ({ children, isAdmin }) => {

    const { isAuthenticated = false, loading = true , user } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        if(!user){
            dispatch(loadUser())
        }  
    }, [isAuthenticated, loading]) 


    if(loading) return <h1>Loading...</h1>;

    if(!loading && isAuthenticated){
        if(isAdmin === true && user.role !== "admin"){
            return <Navigate to="/" />;
        }
        return children;
    }  
    else{
        return <Navigate to={"/login"} />;
    }


    // return (
    //     <Fragment>
    //         {loading === false && (
    //             <Route
    //                 {...rest}
    //                 render={props => {
    //                     if (isAuthenticated === false) {
    //                         // return <Redirect to='/login' />
    //                     }

    //                     if (isAdmin === true && user.role !== 'admin') {
    //                         // return <Redirect to="/" />
    //                     } 

    //                     return <Component {...props} />
    //                 }}
    //             />
    //         )}
    //     </Fragment>
    // )
};

export default ProtectedRoute;
