import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularityComponent } from './popularity.component';

describe('PopularityComponent', () => {
  let component: PopularityComponent;
  let fixture: ComponentFixture<PopularityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularityComponent]
    });
    fixture = TestBed.createComponent(PopularityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
