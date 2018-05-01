import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclaveSelectionComponent } from './conclave-selection.component';

describe('ConclaveSelectionComponent', () => {
  let component: ConclaveSelectionComponent;
  let fixture: ComponentFixture<ConclaveSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConclaveSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclaveSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
