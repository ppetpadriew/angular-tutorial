import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {ReactiveHeroFormComponent} from './reactive-hero-form/reactive-hero-form.component';
import {UniqueDirective} from './directives/unique-directive';


@NgModule({
    declarations: [
        AppComponent,
        HeroFormComponent,
        ReactiveHeroFormComponent,
        UniqueDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
