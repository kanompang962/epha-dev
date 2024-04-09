import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JseaComponent } from './jsea.component';

describe('JseaComponent', () => {
  let component: JseaComponent;
  let fixture: ComponentFixture<JseaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JseaComponent]
    });
    fixture = TestBed.createComponent(JseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
