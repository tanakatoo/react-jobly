
import './App.css';
import { React, useState, useContext, useEffect } from "react"
import NavBar from "./NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import MyRoutes from "./MyRoutes"
import { UserContext } from './context/UserContext';
import { ApplyContext } from './context/ApplyContext';
import JoblyApi from './api';
import { useNavigate } from "react-router-dom"

function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const signUp = async ({ username, password, firstName, lastName, email }) => {
    try {

      const token = await JoblyApi.register({ username, password, firstName, lastName, email })
      //get user info using token saved in api.token
      await getUserInfo(username, token)
      navigate('/')
      return token
    } catch (e) {
      return e
    }
  }

  const login = async ({ username, password }) => {
    try {
      const token = await JoblyApi.login({ username, password })
      await getUserInfo(username, token)
      navigate('/')
      return token
    } catch (e) {
      return e
    }
  }

  const getUserInfo = async (username, token) => {
    const user = await JoblyApi.getUserInfo(username)
    setUser({ token, user })
    console.log('finish getting info from user', user)
    //put user info and token in local storage
    window.localStorage.setItem("token", JSON.stringify(token))
    window.localStorage.setItem("user", JSON.stringify(user))

  }
  const logOut = () => {
    //delete from local storage
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("user")
    setUser(null)
  }

  const updateUser = async ({ username, firstName, lastName, email }) => {
    try {
      const res = await JoblyApi.updateUserInfo({ username, firstName, lastName, email })
      setUser({ token: JoblyApi.token, user: res })
      return res
    } catch (e) {
      return e
    }
  }

  const apply = async (username, jobid) => {
    try {
      const res = await JoblyApi.apply(username, jobid)
      await getUserInfo(username, JoblyApi.token)
      return res
    } catch (e) {
      return e
    }
  }

  //Check at each render if user is logged in or in localStorage
  if (!user) {
    const user = JSON.parse(window.localStorage.getItem("user"))
    const token = JSON.parse(window.localStorage.getItem("token"))

    if (user && token) {
      setUser({ token, user })
    }
  }
  else {
    JoblyApi.token = user.token
  }

  return (
    <>
      <UserContext.Provider value={user}>
        <ApplyContext.Provider value={apply}>
          <NavBar />
          <div className="App">
            <MyRoutes logOut={logOut} signUp={signUp} login={login} updateUser={updateUser} />
          </div>
        </ApplyContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
