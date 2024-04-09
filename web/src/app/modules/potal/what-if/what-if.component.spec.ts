import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIfComponent } from './what-if.component';

describe('WhatIfComponent', () => {
  let component: WhatIfComponent;
  let fixture: ComponentFixture<WhatIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatIfComponent]
    });
    fixture = TestBed.createComponent(WhatIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
