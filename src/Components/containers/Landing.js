import React from 'react'


class Landing extends React.Component {
    state = {}
    render() {
        return (

            <>



                <div class="container"> <img src="https://jeffbredenkamp.neocities.org/geologo.png" alt="logo" class="logo" />
                    <div class="main_nav">
                        <div class="mobile-toggle"> <span></span> <span></span> <span></span> </div>
                        <nav>
                            <ul>
                                <li><a class="smoothscroll" href="#about">About</a></li>
                                <li><a class="smoothscroll" href="#features">Features</a></li>
                                <li><a class="smoothscroll" href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="row hero">
                        <div class="eight columns">
                            <h1 class="header">Lorem Ipsum.</h1>
                            <h2 class="subheader">At vero eos et accusamus et iusto odio dignissimos</h2>
                            <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#"><img src="https://jeffbredenkamp.neocities.org/app-store-badge.png" class="appstorebutton btn" alt="Download on Apple Store" /></a> <a href="#"><img src="https://jeffbredenkamp.neocities.org/google-play-badge.png" class="appstorebutton btn" alt="Download on Google Play" /></a> </div>
                        <div class="four columns"> <img src="https://jeffbredenkamp.neocities.org/phone2.png" class="phone device" alt="phone mockup" /> </div>
                    </div>
                </div>



                <section id="about">
                    <div class="container">
                        <div class="eight columns">
                            <div class="row">
                                <h1>At vero eos et accusamus et iusto odio dignissimos.</h1>
                            </div>
                            <div class="row">
                                <div class="six columns">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="six columns">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                        </div>
                        <div class="four columns"> <img src="https://jeffbredenkamp.neocities.org/geologo.png" /> </div>
                    </div>
                </section>


                <section id="features">
                    <div class="container">
                        <div class="row">
                            <div class="four columns">
                                <div class="row">
                                    <div class="three columns"> <span class="typcn typcn-location-outline icon"></span> </div>
                                    <div class="nine columns">
                                        <h2>Location</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="three columns"> <span class="typcn typcn-lightbulb icon"></span> </div>
                                    <div class="nine columns">
                                        <h2>Ideas</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="three columns"> <span class="typcn typcn-spanner-outline icon"></span> </div>
                                    <div class="nine columns">
                                        <h2>Customisable</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="four columns"> <img src="https://jeffbredenkamp.neocities.org/phone2.png" class="phoneFeature" alt="phone mockup" /> </div>
                            <div class="four columns">
                                <div class="row">
                                    <div class="nine columns">
                                        <h2>Secure</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                    <div class="three columns"> <span class="typcn typcn-key-outline icon"></span> </div>
                                </div>
                                <div class="row">
                                    <div class="nine columns">
                                        <h2>Efficient</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                    <div class="three columns"> <span class="typcn typcn-battery-high icon"></span> </div>
                                </div>
                                <div class="row">
                                    <div class="nine columns">
                                        <h2>Powerful</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                    <div class="three columns"> <span class="typcn typcn-flash-outline icon"></span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <footer>
                    <div class="container">
                        <div class="six columns"> <span class="typcn typcn-social-facebook socialIcons"></span> <span class="typcn typcn-social-twitter socialIcons"></span> <span class="typcn typcn-social-instagram socialIcons"></span> <span class="typcn typcn-social-linkedin socialIcons"></span> </div>
                        <div class="six columns">
                            <p>&copy; 2016</p>
                        </div>
                    </div>
                </footer>

            </>
        );
    }
}

export default Landing;


