import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordioncontentComponent } from './accordioncontent.component';

describe('AccordioncontentComponent', () => {
  let component: AccordioncontentComponent;
  let fixture: ComponentFixture<AccordioncontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordioncontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordioncontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
