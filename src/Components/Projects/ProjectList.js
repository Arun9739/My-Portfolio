import React, { useState } from 'react'
import { FcExpand, FcCollapse } from 'react-icons/fc';
import "./Project.css";
import Zoom from "react-reveal/Zoom";

const ProjectList = ({name,des,projectlink,github,techused}) => {

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

    const [show,setShow] = useState(false);

    const handleShowandCollapse = () => {
        setShow(!show)
    } 

    return(
        <Zoom>
        <div className={show ? 'project-list-opened project-list' : 'project-list'} onClick={handleShowandCollapse} 
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        >

            <div className='title-and-collapse-option'>
                <h4 style={{fontFamily:"Verdana"}}>{name}</h4>
                <p>{show ? <FcCollapse size={20}/> : <FcExpand size={20}/>}</p>
            </div> 

            <div className='description' style={{textAlign:"justify"}}>
                {show ? <p>{des}</p> : <p>{ des.substring(0, 150) }...</p>}
            </div>


            <div className='row'>
                {techused && techused.map((tech, index) =>(
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>
                        
                        <div className='tech-used-in-projects'>
                            <p style={{backgroundColor: colors[index]}}>{tech.techname}</p>
                        </div>

                    </div>
                ))}
            </div>
            
            <div className='project-live-buttons'>
                <div className='live-demo-button'>
                    <a target="_" href={ projectlink }>Live demo</a>
                </div>

                <div className='github-button'>
                    <a target="_" href={ github }> Github link</a>    
                </div>
            </div>
        </div>
        </Zoom>

    )
}

export default ProjectList;