import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
//設定顯示在tab的名稱
    constructor(private titleService: Title) {
        this.titleService.setTitle('Sherri Wang - Home');
    }
}