import React from "react";

function Skills() {
    return(
        <div className="skills-container Section-container">
            <div className='section-line'>
              <img src="./src/assets/star1.png" className='swirls'/>
              <h3 className='Section-Headers' id="skills-header">Skills</h3>
              <img src="./src/assets/star1.png" className='swirls'/>
            </div>
            <p className="currently-learning">I am currently learning...
                <span>
                    <i class="devicon-python-plain" id="currently-icon"></i>
                    Python
                </span>
                .
            </p>
            <div className="skill-icons">
                <div className="skill">          
                    <i class="devicon-javascript-plain"></i>
                    <p>JAVASCRIPT</p>
                </div>
                <div className="skill">     
                    <i class="devicon-react-original"></i>
                    <p>REACT</p>
                </div>
                <div className="skill">
                    <i class="devicon-html5-plain"></i>
                    <p>HTML</p>
                </div>
                <div className="skill">  
                    <i class="devicon-css3-plain"></i>
                    <p>CSS</p>
                </div>
                <div className="skill">       
                    <i class="devicon-vim-plain"></i>
                    <p>VIM</p>
                </div>
                <div className="skill">       
                    <i class="devicon-jquery-plain"></i>
                    <p>JQUERY</p>
                </div>
                <div className="skill">       
                    <i class="devicon-git-plain"></i>
                    <p>GIT</p>
                </div>
                <div className="skill">       
                    <i class="devicon-wordpress-plain"></i>
                    <p>WORDPRESS</p>
                </div>
                <div className="skill">       
                    <i class="devicon-photoshop-plain"></i>
                    <p>PHOTOSHOP</p>
                </div>
                <div className="skill">       
                    <i class="devicon-illustrator-plain"></i>
                    <p>ILLUSTRATOR</p>
                </div>
                <div className="skill after-effects">       
                    <i class="devicon-aftereffects-plain"></i>
                    <p>AFTER EFFECTS</p>
                </div>
                <div className="skill">       
                    <i class="devicon-figma-plain"></i>
                    <p>FIGMA</p>
                </div>
            </div>
        </div>
    )
}

export default Skills