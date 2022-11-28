import React from 'react'

function Login() {
  return (
    <div>
        <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div class="container">
            <div class="card login-card">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <img src="../assets/img/PageImage/loginImage.jpg" alt="login" class="login-card-img" />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <div class="brand-wrapper">
                                <img src="../assets/img/Logo.svg" alt="logo" class="logo" />
                                <p>BANKNAME</p>
                            </div>
                            <p class="login-card-description">Sign into your account</p>

                         
                            <form action="" method="POST">

                                    <p style="color: red;"> *_GET['error']  ! </p>

                                <div class="form-group">
                                    <label for="username" class="sr-only">Username</label>
                                    <input type="text" name="username" id="Username" class="form-control" placeholder="Username" required />
                                    <p id="alert1" style="color: red;"></p>
                                </div>
                                <div class="form-group mb-4">
                                    <label for="password" class="sr-only">Password</label>
                                    <input type="password" name="password" id="password" class="form-control" placeholder="***********" required />
                                </div>
                                <input name="login" id="login" class="btn btn-block login-btn mb-4" type="submit" value="Login" />
                            </form>
                            <a href="../user/forgotPassword.php" class="forgot-password-link">Forgot password?</a>
                            <p class="login-card-footer-text">Don't have an account? <a href="../user/CreateAccount.php" class="text-reset">Register here</a></p>
                            <nav class="login-card-footer-nav">
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