import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import '../styles/home.css'
import video from '../assets/spin.mp4'

const Home = () => {
  const navigate = useNavigate()
  const CLIENT_ID = "11f87af3cad84caaaa71b13450511a8a"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
      navigate("/About")
    }

    setToken(token)
  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }
  return (
    <div class = "bg-background">
      <div class='flex items-center justify-center min-h-screen via-gray-300 to-gay-500 bg-gradient-to-br'>
        <div class="relative w-full h-screen">
        <div class="absolute-center">
          <svg class="circle-svg" viewBox="0 0 500 500">
            <defs>
              <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                id="textcircle_top">
                <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250"
                  to="360 250 250" repeatCount="indefinite" />
              </path>
            </defs>
            <text class="circle-text text-text" dy="70" textLength="1220">
              <textPath xlinkHref="#textcircle_top">
					      Login to view your spotify
				      </textPath>
            </text>
          </svg>

        </div>
        <div class="absolute-center">
          <div class="showreels-div">
            {!token ? <Link to={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
              <video class="showreels-video" loop autoplay muted>
                <source src={video} type="video/mp4" />
              </video>
            </Link> : <button onClick={logout}>Logout</button>}     
                  <img
                    alt="play"
                    class="showreels-btn"
                    src='https://github.com/ahampriyanshu/gfg/raw/main/media/play.png'
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

/*
<div>
  {!token ? <Link to={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
      
  </Link> : <button onClick={logout}>Logout</button>}
</div>
*/