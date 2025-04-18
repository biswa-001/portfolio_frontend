import React from 'react';

function Background() {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <p className='fs-3 fw-bold text-success text-center skill-section'><i class="fas fa-graduation-cap"></i> Qualification</p><hr/>
                <div className='col'>
                    <ul>
                        <li><p>Bachelor of Technology in Computer Science & Engineering</p></li>
                        <p>Brainware University, Kolkata (2021–2025)</p>
                        <p>GPA: 8.89</p> </ul></div>
                <div className='col'>
                    <ul>
                        <li><p>Higher Secondary Education</p></li>
                        <p>Kharga Gurudas Tarasundari Institution, Berhampore (2017–2020)</p>
                        <p>Percentage: 89.6%</p>
                    </ul>
                </div>

            </div>
        </div>



    );
}

export default Background;