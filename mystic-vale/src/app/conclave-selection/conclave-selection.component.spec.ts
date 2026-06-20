import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclaveSelectionComponent } from './conclave-selection.component';
import { ConclaveService } from '../conclave.service';

describe('ConclaveSelectionComponent', () => {
  let component: ConclaveSelectionComponent;
  let fixture: ComponentFixture<ConclaveSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConclaveSelectionComponent],
      providers: [ConclaveService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclaveSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
