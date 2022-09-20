import React from 'react'

function ShortBio() {
    return(
        <div className='Bio-Container'>
            <h3 className='Section-Headers Headers-Center'>About Me</h3>
            <div className="Bio">  
                <div className="Bio-items">                    
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic harum laudantium corrupti optio, itaque quis aut quam quae repellendus ad natus nostrum, obcaecati perspiciatis cumque sit eveniet. Magni, fugiat similique? Architecto, deserunt alias earum sapiente, hic sunt dolore eius corporis labore repudiandae neque voluptates aperiam exercitationem esse? Et quaerat facere laborum, quos voluptatum nobis veritatis. Reiciendis doloribus eum atque nulla?</p>
                    <ul className="Bio-skills">
                        <li>React</li>
                        <li>JavaScipt</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Wordpress</li>
                        <li>Jasmine</li>
                    </ul>
                </div>
                <img src="./src/assets/b-teton-square.jpg" alt="bridger-headshot-tetons" />  
            </div>
            <button className='More'>Bio ></button>
        </div>
    )
}

export default ShortBio