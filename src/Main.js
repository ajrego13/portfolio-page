import Card from "./Card"
import { useState } from "react";

const Main = () => {

const projects = [{
        id: 1,
        image: '2',
        title: 'NHCRN', 
        description: 'I built this website with HTML, CSS and Javascript during my first web development internship',
        url: 'https://www.nhcommunityrights.org/'
    }, 
    {
        id: 2,
        image: '3',
        title: 'Nottingham Water Alliance', 
        description: 'I built this website with HTML, CSS and Javascript during my secound web development internship',
        url: 'http://www.nottinghamwateralliance.com/'
    }, 
    {
        id: 3,
        image: '4',
        title: 'Mini List', 
        description: 'I built this mobile responsive, downloadable PWA with HTML, CSS and Javascript',
        url: 'https://ajrego13.github.io/To-Do-List-2.0/'
    },
    {
        id: 4,
        image: '5',
        title: 'Weather App', 
        description: 'I built this with HTML, CSS and Javascript',
        url: 'https://ajrego13.github.io/Weather-APP/'
    }
]
    return (
        <>
            <main id="projects" className="main_content_container">
                {projects.map((project) => (
                    <Card {...project} key={project.id}/>
                ))}
            </main>
           
        </>
    )
}

export default Main