import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StallHomePageComponent } from './stall-home-page.component';

describe('StallHomePageComponent', () => {
  let component: StallHomePageComponent;
  let fixture: ComponentFixture<StallHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StallHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StallHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
