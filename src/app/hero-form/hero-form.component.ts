import {Component, OnInit} from '@angular/core';
import {Hero} from '../models/Hero';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

    public powers: [string] = [
        'Really Smart',
        'Super Flexible',
        'Super Hot',
        'Weather Changer'
    ];

    public model = new Hero(1, 'Batman', this.powers[0]);

    public submitted = false;

    constructor() {
    }

    ngOnInit() {
    }

    public onSubmit() {
        console.log('On submit');
        this.submitted = true;
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }

    public newHero() {
        this.model = new Hero(1, '', '', '');
    }

}
