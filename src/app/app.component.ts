import {Component, Input} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    @Input()
    public todoTxt = 'test';

    public onSubmit(form: NgForm) {
        console.log(form.value);
        // form.value.first = 'hello';
    }
}
