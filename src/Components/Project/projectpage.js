import React, { useEffect, useState } from 'react';
import axios from "axios";

function Projectpage() {
    const [projectdata, setprojectdata] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/allproject`)
            .then((res) => {
                console.log("Backend data:", res.data);
                setprojectdata(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container mt-5' >
            <div className='row'>
                {
                    projectdata.map((project, index) => {
                        return (
                            <div className="col-md-4" key={index} >
                                <div className="card mb-4 shadow-sm w-100 h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text" >{project.description}</p>
                                        <div className="mb-3">
                                            {project.techStack && project.techStack.map((tech, i) => (
                                                <span key={i} className="badge bg-secondary me-1">{tech}</span>
                                            ))}
                                        </div>

                                        <div className="mt-auto">
                                            {project.githubLink && (
                                                <a href={project.githubLink} target="_blank"  rel="noreferrer" className="btn btn-outline-dark btn-sm me-2">
                                                  <i class="fa-brands fa-github"></i>  GitHub
                                                </a>
                                            )}
                                            {project.liveLink ? (
                                                <a href={project.liveLink} target="_blank"  rel="noreferrer" className="btn btn-primary btn-sm">
                                                   <i class="fas fa-globe"></i> Live Site
                                                </a>
                                            ) : (
                                                <button className="btn btn-secondary btn-sm" disabled>No Live Link</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Projectpage;
