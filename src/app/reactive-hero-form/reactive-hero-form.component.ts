import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Hero} from '../models/Hero';
import {CustomValidators} from '../custom-validators';


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

    constructor(fb: FormBuilder) {
        this.reactiveHeroForm = fb.group({
            name: [null, [Validators.required, Validators.minLength(3)], [CustomValidators.asyncUnique]],
            power: [null, [Validators.required]],
            alterEgo: [null, [CustomValidators.unique]]
        });
        // Above is an alternative syntax of below
        // this.reactiveHeroForm = new FormGroup({
        //     name: new FormControl(
        //         null,
        //         [Validators.required, Validators.minLength(3)],
        //         [CustomValidators.asyncUnique]
        //     ),
        //     power: new FormControl(null, Validators.required),
        //     altEgo: new FormControl()
        // });
    }

    ngOnInit() {
    }

    public get name() {
        return this.reactiveHeroForm.get('name');
    }

    public get power() {
        return this.reactiveHeroForm.get('power');
    }

    public log(input) {
        console.log(input);
    }

}
