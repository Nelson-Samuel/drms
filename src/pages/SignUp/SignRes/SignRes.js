import React from 'react'
import './SignRes.css'
import './material12/mat12.css'
import Front from '../../Front'
import { Link } from 'react-router-dom'
export default function SignCit() {
  return (
	<>
	<Front/>
    <div className="inner">
	<div className="image-holder">
		<img className='signc' src="https://cdn.pixabay.com/photo/2020/11/22/20/12/rottweiler-5767825_640.jpg" alt=""></img>
	</div>
	<form action="">
		<h3 className='sih'>Registration Form</h3>
		<div className="form-wrapper">
						<input type="text" placeholder="Full Name" className="form-control"></input>
						<i class="zmdi zmdi-account-circle"></i>
					</div>
		<div className="form-wrapper">
			<input type="text" placeholder="Username" className="form-control"></input>
			<i className="zmdi zmdi-account"></i>
		</div>
		<div className="form-wrapper">
			<input type="number" placeholder="Aadhaar Number" className="form-control"></input>
			<i class="zmdi zmdi-account-box"></i>
		</div>
		<div className="form-wrapper">
			<input type="number" placeholder="Otp" className="form-control"></input>
			<i className="zmdi zmdi-smartphone-lock"></i>
		</div>
		<span>
						<div className="form-wrapper form-box">
							<div>
								<input type="tel" placeholder="Phone Number" className="form-control phone-input"></input>
							<i className="zmdi zmdi-phone ph-icon"></i>
							</div>
							<button value={"GOTP"} className='gtbox'>Generate Otp</button>
						</div>
					</span>
					
		<div className="form-wrapper form-box" >
			<input type="number" placeholder="Otp" className="form-control"></input>
			<i className="zmdi zmdi-smartphone-lock"></i>
		</div>
		<div className="form-wrapper">
			<input type="text" placeholder="Email Address" className="form-control"></input>
			<i className="zmdi zmdi-email"></i>
		</div>
		<div className="form-wrapper">
			<input type="password" placeholder="Password" className="form-control"></input>
			<i className="zmdi zmdi-lock"></i>
		</div>
		<div class="form-wrapper">
			<input type="password" placeholder="Confirm Password" className="form-control"></input>
			<i className="zmdi zmdi-lock"></i>
		</div>
		<center>
		<p className='sih'>Already have an account?&#160;&#160;<a href="/Login">Login</a></p>
		</center>
		<Link to='/ResPage' ><button className='sibt'>Register
			<i className="zmdi zmdi-arrow-right"></i>
		</button></Link>
	</form>
</div>
</>
  )
}
