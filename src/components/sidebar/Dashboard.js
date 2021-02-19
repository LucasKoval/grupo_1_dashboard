import React from 'react';
import propTypes from 'prop-types';

function Dashboard() {
    return (
        <li className="nav-item active">
            <a className="nav-link" href="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </li>
    );
}

export default Dashboard;