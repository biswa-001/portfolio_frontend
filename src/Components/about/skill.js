import React from 'react';
function SkillsSection() {
    return (
    <div className='container mt-5'>
    <div className='row'>
    <p className='fs-3 text-center fw-bold text-success  '><i className="fas fa-toolbox"></i> Skills  </p><hr/>
<div className='col'>
    <p className='fs-5'>Languages</p>
    <ul>
        <li class="skill-item"> C++</li>
        <li class="skill-item"> C</li>
    </ul>
</div>
<div className='col'>
    <p className='fs-5'>Web Development</p>
    <ul>
        <li class="skill-item"> HTML</li>
        <li class="skill-item"> CSS</li>
        <li class="skill-item"> JavaScript</li>
        <li class="skill-item"> Node.js</li>
        <li class="skill-item"> MongoDB</li>
        <li class="skill-item"> React</li>
    </ul>
    </div>
<div className='col'>
    <p className='fs-5'>Core Concepts</p>
    <ul>
        <li class="skill-item"> OOP</li>
        <li class="skill-item"> DBMS</li>
        <li class="skill-item"> SQL</li>

       
    </ul>
    </div>
<div className='col'>
<p className='fs-5'>Tools & Platforms</p>
    <ul>
        <li class="skill-item"> Git</li>
        <li class="skill-item"> GitHub</li>
        <li class="skill-item"> VS Code</li>

       
    </ul>
</div>
    </div>
    </div> );
}

export default SkillsSection;