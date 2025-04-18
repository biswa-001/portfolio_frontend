import React from 'react';
import Background from './backgroud';
import SkillsSection from './skill';


function Aboutpage() {
    return (
        <>
        <div className='container mt-5 mb-3'>
            <div className='row '>
                <div className='col-4 '>
                    <img src='./media/images/pic1.jpg' style={{ width: "70%", borderRadius: "50%" }} />
                </div>
                <div className='col-8 ps-3'>
                    <p className='fs-3 border-bottom mb-2 fw-bold text-success'><i class="fas fa-user-graduate"></i> About Me</p>
                    <p className="about-text">
    I'm <span className="highlight">Biswajit Ghosh</span>, a Computer Science & Engineering student from Brainware University, Kolkata.
    With a strong foundation in programming and web development, I enjoy transforming ideas into real-world applications.
    <span className="highlight">💡 Open to internships</span> and entry-level roles where I can learn, grow, and contribute!
</p>
                </div>
            </div>
        </div>

<Background/>
<SkillsSection/>
</>
    );




}

export default Aboutpage;