import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import Front from './Front';
function LoginPage() {
  return (
    <div>
        <Front/>
    <div class="container-fluid">
    <div class="row main-content bg-success text-center">
        <div class="col-md-4 text-center company__info">
            <span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
        </div>
        <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div class="container-fluid">
                <div class="row">
                    <h2>Log In</h2>
                </div>
                <div class="row">
                    <form control="" class="form-group1">
                        <div class="row">
                            <input type="text" name="username" id="username" class="form__input1" placeholder="Username"></input>
                        </div>
                        <div class="row">
                           {/* <span class="fa fa-lock"></span>  */}
                            <input type="password" name="password" id="password" class="form__input1" placeholder="Password"></input>
                        </div>
                        <div class="row ">
                        <Link to='#'>Forgot Password</Link>
                        </div>
                        <div class="row">
                            <center>
                            <input type="submit" value="Submit" class="btn12"></input>
                            </center>
                        </div>
                    </form>
                </div>
                <div class="row">
                    <p>Don't have an account? <a href="/Choose">Register Here</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  );
}

export default LoginPage;