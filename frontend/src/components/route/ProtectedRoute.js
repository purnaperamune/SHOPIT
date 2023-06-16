import React, { Fragment, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../actions/userActions'

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {

    const { isAuthenticated, loading, user } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        if(!user){
            dispatch(loadUser())
        }  
    }, [isAuthenticated, loading]) 

    return (
        <Fragment>
            {loading === false && (
                <Route
                    {...rest}
                    render={props => {
                        if (isAuthenticated === false) {
                            // return <Redirect to='/login' />
                        }

                        if (isAdmin === true && user.role !== 'admin') {
                            // return <Redirect to="/" />
                        }

                        return <Component {...props} />
                    }}
                />
            )}
        </Fragment>
    )
}

export default ProtectedRoute
