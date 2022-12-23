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
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="" style="width: 200px;"></a> 
                                        <!-- <a href="index.html"><h1>Matt</h1></a> -->
                                    </div>
                                </div>
                                <div class="header-info-right d-flex align-items-center">
                                <ul>                                          
                                    <!-- <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="login.html">Log In  or  Sign Up</a></li> -->
                                    <li><a href="about.html">About</a></li>
                                    <!-- <li><a href="contact.html">Contact</a></li> -->
                                </ul>
                                <!-- Social -->
                                <div class="header-social">
                                        <a href="https://twitter.com/mattmagazineEG"><i class="fab fa-twitter"></i></a>
                                        <a href="https://fb.me/mattmagazine"><i class="fab fa-facebook-f"></i></a>
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
                                        <img src="assets/img/logo/logo.png" alt="" style="width: 200px;">
                                        <!-- <h1>Matt</h1> -->
                                    </a>
                                </div>
                                <!-- logo 3 -->
                                <div class="logo3 d-block d-sm-none">
                                    <a href="index.html">
                                        <img src="assets/img/logo/logo-mobile.png" alt="" style="width: 100px;"> 
                                        <!-- <h1>Matt</h1> -->
                                    </a>
                                </div>
                                <!-- Main-menu -->
                                <div class="main-menu text-center d-none d-lg-block">
                                    <nav>                                                
                                        <ul id="navigation">                                                                                                                                     
                                            <li><a href="art.html">Art</a></li>
                                            <li><a href="fashion.html">Fashion</a></li>
                                            <li><a href="lifestyle.html">Lifestyle</a></li>
                                            <li><a href="places.html">Places</a></li>
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
                                        <a href="https://twitter.com/mattmagazineEG"><i class="fab fa-twitter"></i></a>
                                        <a href="https://fb.me/mattmagazine"><i class="fab fa-facebook-f"></i></a>
                                        <a href="https://instagram.com/matt_magazine"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="header-info-mid">
                                    <!-- logo -->
                                    <div class="logo">
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="" style="width: 200px;"></a>
                                    </div>
                                </div>
                                <div class="header-info-right d-flex align-items-center">
                                   <ul>                                          
                                       <li><a href="about.html">About</a></li>
                                       <!-- <li><a href="contact.html">Contact</a></li> -->
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

class myArtLatest extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="latest-posts pt-80">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-tittle mb-35">
                            <h2>Latest Posts</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-baner-nw2 mb-30">
                            <div class="banner-img-cap2">
                                <div class="banner-img">
                                    <img src="assets/img/articles/S5 Puppet show/img3 cropped.JPG" alt="">
                                </div>
                                <div class="banner-cap2">
                                    <h3><a href="_S5_puppet_show.html">A show that has been going for five thousand years</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-baner-nw2 mb-30">
                            <div class="banner-img-cap2">
                                <div class="banner-img">
                                    <img src="assets/img/articles/H2 Fo5ar/img2.jpeg" alt="">
                                </div>
                                <div class="banner-cap2">
                                   <h3><a href="_H2_Fokhar.html">Fokhar.. The Art of patience</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-baner-nw2 mb-30">
                            <div class="banner-img-cap2">
                                <div class="banner-img">
                                    <img src="assets/img/articles/S2 Museum/img3 cropped.JPG" alt="">
                                </div>
                                <div class="banner-cap2">
                                   <h3><a href="_S2_Museum.html">A Museum of Art, but this time, feeling a bit different</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

class myFashionLatest extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="latest-posts pt-80">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-tittle mb-35">
                            <h2>Latest Posts</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-baner-nw2 mb-30">
                            <div class="banner-img-cap2">
                                <div class="banner-img">
                                    <img src="assets/img/articles/HM4 Made In Egypt/img2.jpeg" alt="">
                                </div>
                                <div class="banner-cap2">
                                    <h3><a href="_HM4_Made_in_Egypt.html">Made in Egypt</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-baner-nw2 mb-30">
                            <div class="banner-img-cap2">
                                <div class="banner-img">
                                    <img src="assets/img/articles/HM6 Wekala/wekala2.jpeg" alt="">
                                </div>
                                <div class="banner-cap2">
                                   <h3><a href="_HM6_Wekala.html">Yes, mom, I thrifted AGAIN at the Wekala</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-baner-nw2 mb-30">
                            <div class="banner-img-cap2">
                                <div class="banner-img">
                                    <img src="assets/img/articles/HM1  Extinction of Galabeya/img3 cropped.jpeg" alt="">
                                </div>
                                <div class="banner-cap2">
                                   <h3><a href="_HM1_The_extinction_of_galabeya.html">How it started, and how it's ending.. The Extinction of Galabeya</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
class myLifestyleLatest extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="latest-posts pt-80">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-tittle mb-35">
                            <h2>Latest Posts</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-baner-nw2 mb-30">
                            <div class="banner-img-cap2">
                                <div class="banner-img">
                                    <img src="assets/img/articles/M6 Zoo/zoo2.jpeg" alt="">
                                </div>
                                <div class="banner-cap2">
                                    <h3><a href="_M6_Zoo.html">Zoo: Putting animals in cages for visitors to enjoy their day</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-baner-nw2 mb-30">
                            <div class="banner-img-cap2">
                                <div class="banner-img">
                                    <img src="assets/img/articles/O6 kids life style/img3.jpeg" alt="">
                                </div>
                                <div class="banner-cap2">
                                   <h3><a href="_O6_kids_lifestyle.html">Will technology create a lazy generation?</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-baner-nw2 mb-30">
                            <div class="banner-img-cap2">
                                <div class="banner-img">
                                    <img src="assets/img/articles/R1 Therapy/img2.jpeg" alt="">
                                </div>
                                <div class="banner-cap2">
                                   <h3><a href="_R1_Therapy.html">Therapy: A Way to Improve Your General Health</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
class myPlacesLatest extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="latest-posts pt-80">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-tittle mb-35">
                            <h2>Latest Posts</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-baner-nw2 mb-30">
                            <div class="banner-img-cap2">
                                <div class="banner-img">
                                    <img src="assets/img/articles/O8 Circus/img4.jpeg" alt="">
                                </div>
                                <div class="banner-cap2">
                                    <h3><a href="_O8_Circus.html">A show that only kids love: The National Circus of Agouza</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-baner-nw2 mb-30">
                            <div class="banner-img-cap2">
                                <div class="banner-img">
                                    <img src="assets/img/articles/H1 Darb 18/img3 cropped.jpeg" alt="">
                                </div>
                                <div class="banner-cap2">
                                   <h3><a href="_H1_Darb_18.html">The cultural hub of Darb 17 18</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-baner-nw2 mb-30">
                            <div class="banner-img-cap2">
                                <div class="banner-img">
                                    <img src="assets/img/articles/O1 Gezira/img4.jpeg" alt="">
                                </div>
                                <div class="banner-cap2">
                                   <h3><a href="_O1_Gezira.html">Geziret El Dahab: A couple of kilometers away from heaven</a></h3>
                                </div>
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
customElements.define("art-latest", myArtLatest);
customElements.define("fashion-latest", myFashionLatest);
customElements.define("lifestyle-latest", myLifestyleLatest);
customElements.define("places-latest", myPlacesLatest);
