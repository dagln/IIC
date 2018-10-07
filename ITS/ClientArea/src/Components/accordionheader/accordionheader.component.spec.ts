import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionheaderComponent } from './accordionheader.component';

describe('AccordionheaderComponent', () => {
  let component: AccordionheaderComponent;
  let fixture: ComponentFixture<AccordionheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
