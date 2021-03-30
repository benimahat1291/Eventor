import React, { useEffect } from "react";
import Particles from "react-particles-js"
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';
import Aos from "aos";
import "aos/dist/aos.css"

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div >
            <div className="login__container">
                <div className="login__card">
                    <div className="animate one">
                        <span>E</span><span>V</span><span>E</span><span>N</span><span>T</span><span>O</span><span>R</span>
                    </div>
                    <h2 data-aos="fade-zoom-in" data-aos-offset="-200" data-aos-easing="ease-in-sine" data-aos-duration={2000} data-aos-delay={500}>Organize Your Next Event</h2>

                    <div data-aos="flip-left" data-aos-offset="-200" data-aos-easing="ease-in-sine" data-aos-delay={1000} class="wrapper">
                        <div class="link_wrapper">
                            <a onClick={() => loginWithRedirect()}>LOGIN / SIGNUP</a>
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Particles id="particles-js"
                params={{
                    "particles": {
                        "number": {
                            "value": 20,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#fff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 10,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 500,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 2
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "bottom",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 0.5
                                }
                            },
                            "bubble": {
                                "distance": 203.7962037962038,
                                "size": 19.98001998001998,
                                "duration": 2.5574425574425574,
                                "opacity": 0.25574425574425574,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }}
            ></Particles>

        </div>
    )

};

export default Login;