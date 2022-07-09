import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { PostsList } from './features/posts/PostsList'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
import { Login } from './features/users/Login'
import { Logout } from './features/users/Logout'
import { Profile } from './features/users/Profile'
import { NotFound } from './app/NotFound'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={ <PostsList /> } />
          <Route path="/posts/:postId" element={ <SinglePostPage /> } />
          <Route path="/editPost/:postId" element={ <EditPostForm /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/logout" element={ <Logout /> } />
          <Route path="/profile/:username" element={ <Profile /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </div>
    </Router>
  )
}

export default App