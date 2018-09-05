import {FormControl} from '@angular/forms';

export class CustomValidators {
    public static asyncUnique(control: FormControl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const db = ['turbo'];
                if (db.indexOf(control.value) !== -1) {
                    resolve({asyncUnique: true});
                }

                resolve(null);
            }, 2000);
        });
    }

    public static unique(control) {
        const db = ['turbo'];
        if (db.indexOf(control.value) !== -1) {
            return {asyncUnique: true};
        }

        return null;
    }
}
