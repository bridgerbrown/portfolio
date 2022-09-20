import { React, useState} from "react";
import "../Work/work.css"
import WorkItem from "../Work/WorkItem.jsx"

function Work() {
  // Work Items Data
  let [martiniShot, setMartiniShot] = useState({
    title: "Martini Shot website",
    subtitle: "www.MartiniShotPodcast.com",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium ex magnam nihil quam dolore placeat quidem iure rem voluptate. Nam pariatur quaerat assumenda asperiores iusto. Facere libero nemo odit?",
    image1: "./src/assets/galaxy.jpg",
    alt1: "",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium ex magnam nihil quam dolore placeat quidem iure rem voluptate. Nam pariatur quaerat assumenda asperiores iusto. Facere libero nemo odit?",
    image2: "./src/assets/galaxy.jpg",
    alt2: ""
  })

    return(
        <div className="Work-Page">
           <WorkItem itemData={martiniShot} />
           <div className="Coming-Soon">
              <h2>More coming soon...</h2>
           </div>
        </div>
    )
}

export default Work

