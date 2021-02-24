import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteappComponent } from './routeapp.component';

describe('RouteappComponent', () => {
  let component: RouteappComponent;
  let fixture: ComponentFixture<RouteappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
