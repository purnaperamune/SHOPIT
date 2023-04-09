import React, { Fragment } from 'react'

import '../../App.css'

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <img src="/images/shopit_logo.png" />
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header