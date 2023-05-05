import React from 'react';
import ProjectList from './ProjectList';
import "./Project.css";

const Project = () => {

    const data = [
        {
            name:"Paryatana",
            des:"It is a front-end travel agenecy website which has officially participated in Hacktoberfest 2022. This is a website that was both visually appealing and highly functional, providing users with a seamless travel booking experience. Additionally, the website is fully responsive, ensuring that users can access it from any device, including desktops, laptops, tablets, and smartphones.",
            projectlink:"https://arun9739.github.io/Paryatana/",
            github:"https://github.com/Arun9739/Paryatana",
            techused: [
                {
                    techname:"HTML"
                },
                {
                    techname:"CSS"
                },
                {
                    techname:"Javascript"
                },
                {
                    techname:"Jquery"
                },
                {
                    techname:"Bootstrap"
                }
            ]
        },

        {
            name:"React Quiz App",
            des:"This project was an exciting and challenging experience that allowed me to apply my skills in React development, user interface design. Throughout the development process, I focused on creating a dynamic and interactive quiz app that engaged users and tested their knowledge on a variety of topics.",
            projectlink:"https://my-quiz-two.vercel.app/",
            github:"https://github.com/Arun9739/Quiz-App",
            techused: [
                {
                    techname:"React JS"
                },
                {
                    techname:"HTML5"
                },
                {
                    techname:"Bootstrap"
                },
                {
                    techname:"CSS"
                },
                {
                    techname:"Javascript"
                }
            ]
        },

        {
            name:"QR Code generator",
            des:"The website features a user-friendly interface that allows users to easily create custom QR codes by inputting their desired text or URL. In addition to the QR code generator, the website also features several advanced features, including the ability to customize the QR code size and download the QR code.",
            projectlink:"https://qr-create.vercel.app/",
            github:"https://github.com/Arun9739/QR-Code-Generator",
            techused: [
                {
                    techname:"HTML"
                },
                {
                    techname:"CSS"
                },
                {
                    techname:"Javascript"
                },
                {
                    techname:"QR server API"
                },
                {
                    techname:"Bootstrap"
                }
            ]
        },

        {
            name:"Tic-tac-toe game in C++",
            des:" I focused on creating a dynamic and engaging Tic-Tac-Toe game built using C++ language that implemented the Min-Max algorithm to provide an intelligent and challenging opponent for players.  The Min-Max algorithm was implemented to ensure that the computer player always makes the best possible move, providing a challenging opponent for players of all skill levels.",
            projectlink:"https://github.com/Arun9739/tic_tac_toe",
            github:"https://github.com/Arun9739/tic_tac_toe",
            techused: [
                {
                    techname:"C++"
                },
                {
                    techname:"Game development"
                },
                {
                    techname:"Artificial Intelligence"
                },
                {
                    techname:"Min-Max Algorithm"
                },
                {
                    techname:"OOPs"
                }
            ]
        },
        {
            name:"Simple Calculator",
            des:"The calculator features a user-friendly interface that allows users to easily input their numbers and select the desired operation. The result is then displayed in real-time, allowing users to see the final answer and make any necessary adjustments.I focused on creating a simple, yet powerful calculator that provided users with an easy and reliable way to perform basic arithmetic operations.",
            projectlink:"https://simple-calci.vercel.app/",
            github:"https://github.com/Arun9739/Simple-Calculator",
            techused: [
                {
                    techname:"HTML"
                },
                {
                    techname:"CSS"
                },
                {
                    techname:"Javascript"
                },
                {
                    techname:"Bootstrap"
                },
                {
                    techname:"Mathematical logic"
                }
            ]
        },

    ]

    return(
        <div className='container project-section' id='project'>
            
            <div className='section-title'>
                <h5>Projects</h5>
                <span className='line'></span>
            </div>

            <div className='row'>

                {data.map((item, index) => (
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>
                        <ProjectList {...item}/>
                    </div>
                ))}

                
            </div>
        
        </div>
    )
}

export default Project;