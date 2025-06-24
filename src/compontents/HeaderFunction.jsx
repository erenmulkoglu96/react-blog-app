import React from 'react'

import background from "../images/business.jpg"

import '../style.css'
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../authSlice'

// Redirect 


export default function HeaderFunction(props) {

  // Context Dark Mode 
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Redux Login (Authenticated)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();


  {/* start Header  */ }
  {/* 1.YOL(Styling) */ }
  {/* <header style={{color:'blue'}}></header> */ }

  {/* 2.YOL(Styling) */ }
  // const headerCss={
  //   "height":"50vh",
  //   "width":"100%",
  //   "background-color":"black",
  //   "color":"white",
  //   "padding-top":"5rem"
  // }

  return (
    <>
      {/* start Nav  */}
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <div className="container">

          <Link to="/index" className='navbar-brand'>{props.name}</Link>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>

            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Arama ..."
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
            <button onClick={toggleTheme} className="btn btn-warning my-2 my-sm-0 ms-2 me-2"><i class="fa-solid fa-circle-half-stroke"></i> </button>  {/*Dark Mode*/}
            {/* 4444 */}
            {isAuthenticated ? (
              <div>

                <span className="text-white me-2"> Hoşgeldiniz, {user.email}</span>
                <button className="btn btn-danger" onClick={() => dispatch(logout())}>Çıkış Yap</button>
              </div>
            ) : (
              <Link to="/login" className='me-2 btn btn-primary'><i class="fa-solid fa-user-lock"></i></Link>
            )
            }

{isAuthenticated ? (
              <div>
            
              </div>
            ) : (
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item dropdown text-white">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Register
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link to="/login" className='me-2 dropdown-item'>Login</Link>
                  <Link to="/register" className='me-2 dropdown-item'>Register</Link>
                </div>
              </li>
            </ul>
            )
            }



            

          </div>
        </div>
      </nav>
      {/* end Nav  */}


      {/* start Header  */}
      {/* 1.YOL(Styling) */}
      {/* <header style={{color:'blue'}}></header> */}
      {/* 2.YOL(Styling) */}

      {/*3.YOL*/}
      <header className="backgroundExternal">
        <p className='specialParag'>ReactJS Blog App</p>
      </header>

      {/* <img src={background} alt="" srcset="" /> */}

      {/* end Header  */}

    </>
  )
}
