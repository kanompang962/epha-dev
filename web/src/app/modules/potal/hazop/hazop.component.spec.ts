import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazopComponent } from './hazop.component';

describe('HazopComponent', () => {
  let component: HazopComponent;
  let fixture: ComponentFixture<HazopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HazopComponent]
    });
    fixture = TestBed.createComponent(HazopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
