import React from "react";

function Home() {
    return(
        <div className="Home">
            <main>
                <img src="./src/assets/galaxy.jpg" alt="galaxy" />
                <div className="Bio-short"> 
                    <img src="./src/assets/b-teton.jpg" alt="bridger-headshot-tetons" />   
                    <div className="Bio-items">                    
                        <h2>Bridger Brown</h2>
                        <h3>Frontend Developer</h3>
                        <ul className="Bio-skills">
                            <li>React</li>
                            <li>JavaScipt</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Wordpress</li>
                            <li>Jasmine</li>
                        </ul>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic harum laudantium corrupti optio, itaque quis aut quam quae repellendus ad natus nostrum, obcaecati perspiciatis cumque sit eveniet. Magni, fugiat similique? Architecto, deserunt alias earum sapiente, hic sunt dolore eius corporis labore repudiandae neque voluptates aperiam exercitationem esse? Et quaerat facere laborum, quos voluptatum nobis veritatis. Reiciendis doloribus eum atque nulla?</p>
                        <button>Read More</button>
                    </div>
                </div>

                <div>

                </div>
            </main>
        </div>
    )
}

export default Home