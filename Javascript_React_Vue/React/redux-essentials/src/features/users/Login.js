import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

import { login } from "./userSlice"

export const Login = () => {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onUsernameChanged = e => setUsername(e.target.value)

  const users = useSelector(state => state.users)

  const onLoginBtnClicked = () => {
    if (username) {
      const user = users.find(user => user.name === username)
      if (user) {
        dispatch(login({user: user}))
        setUsername('')
        navigate("/")
      } else {
        setUsername('')
        alert('로그인 실패')
      }
    }
  }

  return (
    <section>
      <form>
          <label htmlFor="username">아이디:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onUsernameChanged}
          />

          <br />

          <button type="button" onClick={onLoginBtnClicked}>
            Login
          </button>
        </form>
    </section>
  )
}