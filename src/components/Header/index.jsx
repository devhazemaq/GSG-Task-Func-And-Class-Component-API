import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { PATHS } from '../../router/paths'
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1>Header</h1>

        <nav>
          <ul>
            <li>
              <NavLink to={PATHS.HOME}>
                {({ isActive, isPending }) => (isActive ? <u>Home</u> : 'Home')}
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.ABOUT}>
                {({ isActive, isPending }) =>
                  isActive ? <u>About</u> : 'About'
                }
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.POSTS.ROOT}>
                {({ isActive, isPending }) =>
                  isActive ? <u>Posts</u> : 'Posts'
                }
              </NavLink>
            </li>

          </ul>
        </nav>
      </header>
    )
  }
}
