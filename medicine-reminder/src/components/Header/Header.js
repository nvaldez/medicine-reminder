import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <div>
            <h1>Logo</h1>
          </div>
          <div>
            <nav>
              <ul>
                <Link className='link' to='/home'>
                  Home
                </Link>
                {/* <Link className='link' to='/medicine'>
                  Medicines
                </Link>
                <Link className='link' to='/doctor'>
                  Doctor
                </Link> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;