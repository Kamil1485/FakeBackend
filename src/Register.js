import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import toasty from 'toasty';
const Register = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("man");

const navigate=useNavigate();

const IsValidate=()=>{
    let errMessage="Please Enter the"
    let isprocessed=true;
    if(id==null || id==""){
    isprocessed=false;
    errMessage+=" Username "
    }

    if(name==null || name==""){
        isprocessed=false;
        errMessage+=" FullName"
     }

     if (password === null || password === '') {
        isprocessed = false;
        errMessage += ' Password';
    }
    if (email === null || email === '') {
        isprocessed = false;
        errMessage += ' Email';
    }
    if (phone === null || phone === '') {
        isprocessed = false;
        errMessage += ' Phone Number';
    }

    if(!isprocessed){
      toast.warning(errMessage);
    }
    return isprocessed;

}

const submitForm=(e)=>{
    e.preventDefault();
    
    let user={id,name,password,email,phone,country,address,gender};
    console.log(user)
    if(IsValidate()){
    fetch("http://localhost:4000/user",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(user)
    }).then(response=>{
        console.log(response);
        toast.success('Registered successfully.')
        navigate("/login")
    })
    .catch((err)=>{
    console.log(err)
    toast.error('Failed :' + err.message);
}
    )

}

}

    return (
        <div>
   
       <Link className='link' to={"/"}>Home</Link>
     
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={submitForm}>
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span className="errmsg">*</span></label>
                                        <input  value={id} onChange={e => setId(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input   value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => setName(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input   value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input  value={phone} onChange={e => setPhone(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country <span className="errmsg">*</span></label>
                                        <select value={country} onChange={e => setCountry(e.target.value)} className="form-control">
                                            <option disabled value="">Select Country</option>
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="singapore">Singapore</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea   value={address} onChange={e => setAddress(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <br></br>
                                        <input   type="radio" checked={gender === 'man'} onChange={e => setGender(e.target.value)} name="gender" value="man" className="app-check"></input>
                                        <label>Male</label>
                                        <input   type="radio" checked={gender === 'woman'} onChange={e => setGender(e.target.value)} name="gender" value="woman" className="app-check"></input>
                                        <label>Female</label>
                                        
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button> or
                            <span> <Link to={'/login'} className="btn btn-danger">Back to Login</Link></span>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}


export default Register