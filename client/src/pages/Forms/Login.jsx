import React from 'react'

function Login() {
  return (
    <div>
        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container">
            <div className="card login-card">
                <div className="row no-gutters">
                    <div className="col-md-5">
                        <img src="../assets/img/PageImage/loginImage.jpg" alt="login" className="login-card-img" />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <div className="brand-wrapper">
                                <img src="../assets/img/Logo.svg" alt="logo" className="logo" />
                                <p>BANKNAME</p>
                            </div>
                            <p className="login-card-description">Sign into your account</p>

                         
                            <form action="" method="POST">

                                    <p style="color: red;"> *_GET['error']  ! </p>

                                <div className="form-group">
                                    <label for="username" className="sr-only">Username</label>
                                    <input type="text" name="username" id="Username" className="form-control" placeholder="Username" required />
                                    <p id="alert1" style="color: red;"></p>
                                </div>
                                <div className="form-group mb-4">
                                    <label for="password" className="sr-only">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="***********" required />
                                </div>
                                <input name="login" id="login" className="btn btn-block login-btn mb-4" type="submit" value="Login" />
                            </form>
                            <a href="../user/forgotPassword.php" className="forgot-password-link">Forgot password?</a>
                            <p className="login-card-footer-text">Don't have an account? <a href="../user/CreateAccount.php" className="text-reset">Register here</a></p>
                            <nav className="login-card-footer-nav">
                                <a href="../pages/terms.php">Terms of use.</a>
                                <a href="../pages/privacypolicy.php">Privacy policy</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    </div>
  )
}

export default Login   