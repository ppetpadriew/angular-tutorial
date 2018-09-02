import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Hero} from '../models/Hero';


class CustomValidators {
    public static asyncUnique(control: FormControl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const db = ['turbo'];
                if (db.indexOf(control.value) !== -1) {
                    resolve({unique: false});
                }

                resolve(null);
            }, 2000);
        });
    }
}

@Component({
    selector: 'app-reactive-hero-form',
    templateUrl: './reactive-hero-form.component.html',
    styleUrls: ['./reactive-hero-form.component.css']
})
export class ReactiveHeroFormComponent implements OnInit {

    public powers: [string] = [
        'Really Smart',
        'Super Flexible',
        'Super Hot',
        'Weather Changer'
    ];

    public model = new Hero(1, 'Batman', this.powers[0]);

    public submitted = false;

    public reactiveHeroForm: FormGroup;

    constructor() {
        this.reactiveHeroForm = new FormGroup({
            name: new FormControl(
                null,
                [Validators.required, Validators.minLength(3)],
                [CustomValidators.asyncUnique]
            ),
            power: new FormControl(null, Validators.required),
            altEgo: new FormControl()
        });
    }

    ngOnInit() {
    }

}
