import { Component, Input } from '@angular/core';
import { Project } from '../_models/project';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
    //宣告一個輸入屬性 project，並將其初始化為一個空物件，同時宣告其類型為 Project。
    @Input() project = {} as Project;
}
