import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
  const[userName,setUserName]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();

useEffect(()=>{
  sessionStorage.clear();//kullanıcı sayfayı kapatıp tekrar girdiğinde yeniden login olmalı
},[])

const submitLogin=(e)=>{
  e.preventDefault();
  if(validation()){// if it's return true
   fetch("http://localhost:4000/user/"+userName).then(response=>{
console.log(response)
return response.json();

   }).then(data=>{
    console.log(data)//User's data
    if (data.name!==userName && data.password!==password) {

      toast.error('Login failed, invalid credentials');
  }
  else{
       toast.success('Success');
       sessionStorage.setItem('username',userName);
       sessionStorage.setItem('jwttoken',data.jwtToken);
navigate("/")
  }
  })
   .catch((err)=>{
    toast.error('Failed :' + err.message);

   })
  }

}

const validation=()=>{
  let result=true;
  let count=0;
  let errMessage="Wrong"
  if(userName===null || userName===""){
    result=false;
    count++;
errMessage+=" Username"
  }
  if(password===null || password===""){
    result=false;
    count++;
    errMessage+=" Passwrod "
  }

  if(!result){
    toast.warning(errMessage);
  }
  return result;
}

  return (
    <div className="row">
      <Link  className='link' to={"/"}>Home</Link>
    <div className="offset-lg-3 col-lg-6" style={{ marginTop: '120px' }}>
        <form onSubmit={submitLogin} className="container">
            <div className="card">
                <div className="card-header">
                    <h2>User Login</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>User Name <span className="errmsg">*</span></label>
                        <input value={userName} onChange={e =>setUserName(e.target.value)} className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Password <span className="errmsg">*</span></label>
                        <input type="password" value={password} onChange={e =>setPassword(e.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Login</button> or
                    <span> <Link to={'/register'} className="btn btn-success">Create an Account </Link></span>
                </div>
            </div>
        </form>
    </div>
</div>
);
}

export default Login



   // if (Object.keys(resp).length === 0) {
                //     toast.error('Please Enter valid username');
                // } else {
                //     if (resp.password === password) {
                //         toast.success('Success');
                //         sessionStorage.setItem('username',username);
                //         usenavigate('/')
                //     }else{
                //         toast.error('Please Enter valid credentials');
                //     }
                // }
                