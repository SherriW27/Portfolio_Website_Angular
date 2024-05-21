import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';
@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    projects: Project[] = [
        {
            id: 0,
            name: "Boundless",
            pictures: ["../../assets/image1.png", "../../assets/image2.png", "../../assets/image3.png"],
            projectLink: "//www.github.com",
            summary: "Connecting passionate music teachers and learners through accessible online lessons.",
            description: "The recent global pandemic has significantly impacted the income of music teachers worldwide. In response to these challenging times, many educators have turned to online and remote teaching methods. This shift has given rise to a burgeoning market for online music lessons, providing new opportunities for both teachers and students.This platform is dedicated to connecting passionate music instructors with eager learners, offering a wide range of online music courses. Whether you are a beginner or an advanced musician, our tailored lessons are designed to meet your specific needs and goals. By leveraging the power of technology, we aim to make high-quality music education accessible to everyone, anywhere.Join this platform in revolutionizing the way music is taught and learned, and discover the joy of music from the comfort of your home.",
            tags: [Tag.REACT , Tag.JAVASCRIPT, Tag.NODEJS]
        },
        {
            id: 1, name: "Boundless management", pictures: ["../../assets/image1.png", "../../assets/image2.png", "../../assets/image3.png"], projectLink: "//www.github.com", summary: "Manage the Boundless website efficiently with our comprehensive background management system.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.PHP,], 
    
        },
        { id: 2, name: "Portfolio Website", pictures: ["../../assets/image1.png", "../../assets/image2.png", "../../assets/image3.png"], projectLink: "//www.github.com", summary: "Showcasing my skills and projects", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR] },
        
    ];

    constructor() { }

    GetProjects() {
        return this.projects;
    }
    GetProjectById(id: number): Project {
        let project = this.projects.find(project => project.id === id);

        if (project === undefined) {
            throw new TypeError('There is no project that matches the id :' + id);
        }
        return project;
    }
    GetProjectsByFilter(filterTags: Tag[]) {
        let filteredProjects: Project[] = [];

        this.projects.forEach(project => {
            let foundAll = true;

            filterTags.forEach(filterTag => {
                if (!project.tags.includes(filterTag)) {
                    foundAll = false;
                }
            });

            if (foundAll) {
                filteredProjects.push(project);
            }
        });

        return filteredProjects;
    }
}
