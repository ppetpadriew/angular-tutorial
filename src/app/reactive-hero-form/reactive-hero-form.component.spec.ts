import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveHeroFormComponent } from './reactive-hero-form.component';

describe('ReactiveHeroFormComponent', () => {
  let component: ReactiveHeroFormComponent;
  let fixture: ComponentFixture<ReactiveHeroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveHeroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveHeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
