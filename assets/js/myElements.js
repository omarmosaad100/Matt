class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <div class="header-area">
            <div class="main-header ">
                <div class="header-top ">
                <div class="container-fluid">
                    <div class="col-xl-12">
                            <div class="row d-flex justify-content-lg-between align-items-center">
                                <div class="header-info-left">
                                    <!-- <li class="d-none d-lg-block"> -->
                                        <div class="form-box f-right ">
                                            <input type="text" name="Search" placeholder="Search for articles...">
                                            <div class="search-icon">
                                                <i class="ti-search"></i>
                                            </div>
                                            <div class="autocom-box">
                                                <li>Title 1</li>
                                                <li>Title 2</li>
                                                <li>Title 3</li>
                                                <li>Title 4</li>
                                            </div>
                                        </div>
                                    <!-- </li> -->
                                </div>
                                <div class="header-info-mid">
                                    <!-- logo -->
                                    <div class="logo">
                                        <!-- <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a> -->
                                        <a href="index.html"><h1>Matt</h1></a>
                                    </div>
                                </div>
                                <div class="header-info-right d-flex align-items-center">
                                <ul>                                          
                                    <!-- <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="login.html">Log In  or  Sign Up</a></li> -->
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                                <!-- Social -->
                                <div class="header-social">
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="https://instagram.com/matt_magazine"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            <div class="header-bottom  header-sticky">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <!-- logo 2 -->
                                <div class="logo2">
                                    <a href="index.html">
                                        <!-- <img src="assets/img/logo/logo.png" alt=""> -->
                                        <h1>Matt</h1>
                                    </a>
                                </div>
                                <!-- logo 3 -->
                                <div class="logo3 d-block d-sm-none">
                                    <a href="index.html">
                                        <!-- <img src="assets/img/logo/logo-mobile.png" alt=""> -->
                                        <h1>Matt</h1>
                                    </a>
                                </div>
                                <!-- Main-menu -->
                                <div class="main-menu text-center d-none d-lg-block">
                                    <nav>                                                
                                        <ul id="navigation">                                                                                                                                     
                                            <li><a href="art.html">Art</a></li>
                                            <li><a href="category.html">Fashion</a></li>
                                            <li><a href="category.html">Lifestyle</a></li>
                                            <li><a href="category.html">Places</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> 
                            <!-- Mobile Menu -->
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
    </div>
        `
    }
}

class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="footer-area footer-padding">
        <div class="header-area">
            <div class="main-header ">
                <div class="header-top d-none d-lg-block">
                   <div class="container">
                       <div class="col-xl-12">
                            <div class="row d-flex justify-content-between align-items-center">
                                <div class="header-info-left d-flex">
                                    <!-- Social -->
                                    <div class="header-social">
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="header-info-mid">
                                    <!-- logo -->
                                    <div class="logo">
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
                                    </div>
                                </div>
                                <div class="header-info-right d-flex align-items-center">
                                   <ul>                                          
                                       <li><a href="about.html">About</a></li>
                                       <li><a href="contact.html">Contact</a></li>
                                   </ul>
                                </div>
                            </div>
                       </div>
                   </div>
                </div>
            </div>
       </div>
    </div>
    <!-- footer-bottom area -->
    <div class="footer-bottom-area">
        <div class="container">
            <div class="footer-border">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-9 col-lg-8">
                        <div class="footer-copy-right text-center">
                            <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
}

customElements.define("my-header", MyHeader);
customElements.define("my-footer", MyFooter);