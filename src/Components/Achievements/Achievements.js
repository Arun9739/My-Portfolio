import React from 'react'
import "./Achievements.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";

import hacktoberfest from "../../img/hacktoberfest.jpeg";
import ace from "../../img/ace.jpeg";
import hackerrank from "../../img/hackerrank.png";
import codechef from "../../img/codechef.jpeg";
import github from "../../img/Github.png";
import ssoc from "../../img/ssoc-22.jpeg";

const Achievements = () => {
    const data = [
        {
            des:"My repository 'Parytana' which participated in Hacktoberfest'22 got 100+ stars, 120+ forks, 170+ issues, 180+ pull requests.",
            img : hacktoberfest
        },
        {
            des:"I have got 17th rank as Contributor among 1000+ participants during Social Summer of Code 2022 for the contribution in various open source projects.",
            img : ssoc
        },
        {
          des:"I have earned 100+ stars overall in Github, so I have been recognised among the top 5% of users of Github.",
          img : github
        },
        {
            des:"I have solved more than 300+ problems in Codechef platform. My highest rating in codechef was 1485.",
            img : codechef
        },
        {
            des:"Certfication and verified skill in JAVA and SQL in hackerrank platform. Also I am a 5 star coder in hackerrank in C++.",
            img : hackerrank
        },
        {
          des:"I have been selected as technical lead for ACE-CSI student chapter of KLS GIT for consecutive 2 years since 2022.",
          img : ace
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

    const colors = [
        "#800080",
        "#FF0000",
        "#1F618D",
        "#585858",
        "#888000",
        "#00C49F",
        "#ADD8E6",
        "#FF1142",
        "#0088FE",
        "#FFBB28",
        "#008000",
        "#8181F7",
        "#585858",
        "#FE2EF7"
      ];

    return(
        <div className='container achievement-section' id='achievements'>
            <div className='section-title'>
                <h5>Achievements</h5>
                <span className='line'></span>
            </div>

            <div className='achievement-slider'>
                
                <Slider {...settings}>
                    
                    {data.map((item, index) => 
                        <Zoom>
                        <div className='content-slider-main'>
                            <div className='content-slider' key={index} style={{backgroundColor:colors[index]}}>
                                <img src={item.img} alt="achievement " className='center-image'/>
                                <p>{item.des}</p>
                            </div>
                        </div>
                        </Zoom>
                    )}

                </Slider>
            </div>
        </div>
    )
}

export default Achievements;