import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {CustomValidators} from '../custom-validators';
import {Directive} from '@angular/core';

@Directive({
    selector: '[appUnique]',
    providers: [{provide: NG_VALIDATORS, useClass: UniqueDirective, multi: true}]
})
export class UniqueDirective implements Validator {
    registerOnValidatorChange(fn: () => void): void {
    }

    validate(c: AbstractControl): ValidationErrors | null {
        return CustomValidators.unique(c);
    }

}
