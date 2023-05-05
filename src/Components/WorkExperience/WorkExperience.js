import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdGroupWork } from 'react-icons/md';
import './WorkExperience.css'

const data=[
    {
        companyName: "Social Winter of Code 2023",
        position: "Mentor",
        des: "As a mentor in the Social Winter of Code 2023, my role was to guide and support a group of participants as they worked on open-source projects related to social issues.",
        year: "Jan 2023 - Mar 2023",
        techSkills: [
            {
                techname: "React JS"
            },
            {
                techname: "Python"
            },
            {
                techname: "C/C++"
            },
            {
                techname: "Java"
            },
        ] 
    },
    {
        companyName: "Hacktoberfest 2022",
        position: "Project Maintainer",
        des: " As a project maintainer during Hacktoberfest, my role was overseeing and coordinating the contributions made by the community.",
        year: "Oct 2022 - Nov 2022",
        techSkills: [
            {
                techname: "HTML"
            },
            {
                techname: "CSS"
            },
            {
                techname: "JavaScript"
            },
            {
                techname: "Bootstrap"
            },
            {
                techname: "JQuery"
            }
        ] 
    },
    {
        companyName: "Social Summer of Code 2022",
        position: "Open source contributor",
        des: "As a contributor in an open-source program, my role involves actively participating in the development of software by contributing code, documentation, or other resources to the project.",
        year: "Aug 2022 - Oct 2022",
        techSkills: [
            {
                techname: "React JS"
            },
            {
                techname: "Python"
            },
            {
                techname: "SQL"
            },
            {
                techname: "Java"
            },
        ] 
    },
    {
        companyName: "GirlScript Summer of Code 2022",
        position: "Open source contributor",
        des: "My responsibilities as a contributor include adhering to the project's guidelines and standards, writing code that meets the project's style guide, submitting bug reports and patches, and participating in discussions on the project's mailing lists or forums.",
        year: "Mar 2022 - Jun 2022",
        techSkills: [
            {
                techname: "JavaScript"
            },
            {
                techname: "Java"
            },
            {
                techname: "C/C++"
            },
            {
                techname: "Git"
            },
        ] 
    },
    {
        companyName: "The Sparks Foundation",
        position: "Web Development Intern",
        des: "My responsibilities as a contributor include adhering to the project's guidelines and standards, writing code that meets the project's style guide, submitting bug reports and patches, and participating in discussions on the project's mailing lists or forums.",
        year: "Feb 2022 - Mar 2022",
        techSkills: [
            {
                techname: "HTML"
            },
            {
                techname: "CSS"
            },
            {
                techname: "JavaScript"
            },
            
        ] 
    }
]

const colors=[
    "#800000",
    "#FF8042",
    "#001CCE",
    "#4B088A",
    "#FF6347",
    "#FF1042"
]

const WorkExperience = () => {
    return(
        <div className='container workexperience-section' id='workexperience'>
            <div className='section-title'>
                <h5>Work Experience</h5>
                <span className='line'></span>
            </div>

            <div className='timeline-section' >
                <VerticalTimeline lineColor='#FF1042'>
                {data.map((item, index) => (
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: colors[index], color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #FF1042' }}
                    date={ item.year }
                    dateClassName = "date-class"
                    iconStyle={{ background: colors[index], color: '#fff' }}
                    icon={< MdGroupWork />}
                  >
                    <h3 className="vertical-timeline-element-title" style={{color:'yellow'}}>
                        { item.companyName }
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">{ item.position }</h4>

                    <div className='row'>
                        {item.techSkills.map((tec, index) => 
                            <div className='col-xl-4 col-lg-3 col-md-6 col-sm-12' key={ index }>
                                <div className='tech-skills'>
                                    <p>{ tec.techname }</p>
                                </div>
                            </div>
                        )}

                    </div>

                    <p>
                        { item.des }
                    </p>
                  </VerticalTimelineElement>
                
                ))}
                </VerticalTimeline>
            </div>

        </div>
    )
};

export default WorkExperience;