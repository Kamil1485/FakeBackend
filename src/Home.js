import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();//Kullanıcıyı girer girmez login sayfasına aktariyoruz eğer username alanı boş ise ilk başta boş oldugu için hemen aktarıyoruz.
  useEffect(()=>{
    let userName=sessionStorage.getItem("username");
    if(userName===null|| userName===null){
      navigate("/login")
    }
  },[])
  return (
    <div>
    <h1>Home</h1>
      <div className='home__links' >
        <Link className='link' to="/">Home</Link>
        <Link  className='link' to="/login">Logout</Link>

      </div>
    </div>
  )
}

export default Home