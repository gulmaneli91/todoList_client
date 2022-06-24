import React from 'react'
import {FaCalendarCheck} from 'react-icons/fa'

export default props => (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <FaCalendarCheck/> TodoApp
                </a>
                <div id="navbar" className='navbar-collapse'>
                    <ul className="navbar-nav">
                        <li><a href="#/todos">Tarefas</a></li>
                        <li><a href="#/about">Sobre</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
)