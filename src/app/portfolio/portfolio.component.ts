import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
    
    projects = {} as Project[];

    isCollapsed: boolean = true;
    
    typescript: boolean = false;
    constructor(private titleService: Title, private projectService: ProjectsService) {
        this.titleService.setTitle('Sherri Wang - Portfolio');
    }
    ngOnInit(): void {
        this.projects = this.projectService.GetProjects() 
    }

    // Filter() {
    //     let filterTags: Tag[] = [
    //     ];

    //     this.projects = this.projectService.GetProjectsByFilter(filterTags);
    // }
}


