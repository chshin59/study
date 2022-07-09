import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  const currentUser = useSelector(state => state.user)
  
  return (
    <nav>
      <section>
        <h1>Redux 핵심 Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
          </div>

          {/* 로그인 한 경우 */}
          { currentUser.id &&
            <>
              <div className="navLinks">
                <Link to={`/profile/${currentUser.name}`} >
                  My profile
                </Link>
              </div>
              <div className="navLinks">
                <Link to="/logout">
                  Logout
                </Link>
              </div>
            </>
          }

          {/* 비로그인 상태 */}
          { !currentUser.id && 
            <>
              <div className="navLinks">
                <Link to="/login">
                  Login
                </Link>
              </div>
              <div className="navLinks">
                <Link to="/">
                  회원가입
                </Link>
              </div>
            </>
          }
        </div>
      </section>
    </nav>
  )
}