function navbar(){
    return `
    <div id="sidebar">
        <div id="sidelogo"><img src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=100&dpr=2.0" alt="">
            <button id="menu"> 
                <label for="sidecheck" id="lab" onclick="side()"><i class="fa-solid fa-bars"></i></label></button>
        </div>

        <input type="text" name="" id="Search" placeholder="Search By fundraiser creator,benyficiary or NGOs">
        <span>To view fundraisers you have supported on Ketto <a href="#" id="click">Click here</a></span>
        <a href="./BrowseFundraisers.html">Browse Fundraisers</a>
        <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Fondraiser for<i
                    class="fa-sharp fa-solid fa-caret-down"></i></button>
            <div id="myDropdown" class="dropdown-content">
                <a href="#" class="app">Medical treatment</a>
                <a href="#" class="app">Ngo/Charety</a>
                <a href="#" class="app">Other cases</a>
            </div>
        </div>
        <a href="./howitworks.html">How its work</a>
        <a href="https://api.whatsapp.com/send?phone=919930088522">Get us On whatsapp</a>
        <a href="#" onclick="signShow()" class="signbtn">Sign In</a>

        <button id="sfund"> Start a Fundraiser</button>
    </div>
    <!-- ==================== navbar========================================== -->
    <div id="nav">
        <div id="logo"><img src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=100&dpr=2.0" alt="">
        </div>
        <div id="sec_nav">
            <a href="./BrowseFundraisers.html">Browse Fundraisers</a>
            <div class="tdropdown">
                <button onclick="mytFunction()" class="tdropbtn">Fondraiser for<i
                        class="fa-sharp fa-solid fa-caret-down"></i></button>
                <div id="tmyDropdown" class="tdropdown-content">
                    <a href="#" class="app">Medical treatment</a>
                    <a href="#" class="app">Ngo/Charety</a>
                    <a href="#" class="app">Other cases</a>
                </div>
            </div>
            <a href="./howitworks.html">How its work</a>
            <span><i class="fa-solid fa-magnifying-glass"></i>
                Search
            </span>
        </div>
        <div id="trd_nav">
            <button onclick="whatsapp()" id="whatsapp"> <i class="fa-brands fa-whatsapp"></i> Chat</button>
            <button id="fund" onclick="signup()"> Start a Fundraiser</button>
            <a href="#" onclick="signShow()" class="signbtn">Sign In</a>

        </div>
        <button id="menu"> 
            <label for="sidecheck" id="lab" onclick="side()"><i class="fa-solid fa-bars"></i></label></i></button>
    </div>


    <div id="container">
        <div style="height: 500px;background-color: aqua;">

        </div>
        <div style="height: 500px;background-color: green; "></div>
        <div style="height: 500px;background-color: red; "></div>
    </div>
    <div id="signin">
        <div id="s1">
            <h2>Login</h2>
            <button id="scross" onclick="signShow()"><i class="fa-sharp fa-solid fa-x"></i></button>
        </div>
        <div id="s2">
            <div id="s21" class="s21">
                <input type="text" name="" id="mobile" placeholder="Email/Mobile Number">
                <input type="text" name="" id="otp" placeholder="Enter OTP">
                <div id="button1" onclick="getOTP()">Get OTP</div>
                <div id="button2" onclick="login()">Login</div>
                <div id="button3" onclick="emaillog()">Sign in</div>
                <span id="logPass" onclick="Pass()">Login Via Password</span>
                <p>By continuing you agree to our <a href="https://www.ketto.org/terms-of-use.php">Terms of
                        Service</a> and <a href="https://www.ketto.org/privacy-policy.php">Privacy Policy</a></p>
                <h4>Want to start a fundraiser? <a href="#">Click here</a></h4>

                <span id="or">OR </span>
                <span id="nor"></span>

            </div>
            <div id="s22">
                <div>
                    <img src="https://ketto.gumlet.io/assets/images/login/google.png?w=240&dpr=1.2" alt="">
                    <p>Sign in With Google</p>
                </div>

            </div>
        </div>
    </div>`
}
export default navbar; 