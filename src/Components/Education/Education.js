import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const data = [
        {
            name:"KLS Gogte Institute of Technology, Belagavi",
            degree:"B.E in Computer Science and engineering",
            year:"2020-24",
            des:"CGPA : 9.17"
        },
        {
            name:"KLE's RL PU College of Science, Belagavi",
            degree:"PUC in Science",
            year:"2018-20",
            des:"Percentage : 89.66 %"
        },
        {
            name:"BK Model High School, Belagavi",
            degree:"SSLC",
            year:"2015-18",
            des:"Percentage : 93.29 %"
        }
    ]

    const colors=[
        "#800000",
        "#888000",
        "#00C49F",
        "#ADD8E6",
        "#FF1142",
        "#0088FE",
    ]

    return(
        <div className='container education-section' id='education'>
            <div className='section-title'>
                <h5>Education</h5>
                <span className='line'></span>
            </div>

            <div className='timeline-section'>
                <VerticalTimeline lineColor='#FF1042'>
                {data.map((item, index) => (
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: colors[index], color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #FF1042' }}
                    date={ item.year }
                    dateClassName = "date-class"
                    iconStyle={{ background: colors[index], color: '#fff' }}
                    icon={< FaGraduationCap />}
                  >
                    <h3 className="vertical-timeline-element-title">
                        { item.name }
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle" style={{color:"yellow", marginTop:"10px"}}>
                        { item.degree }
                    </h5>

                    <p>
                        { item.des }
                    </p>
                  </VerticalTimelineElement>
                
                ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Education;