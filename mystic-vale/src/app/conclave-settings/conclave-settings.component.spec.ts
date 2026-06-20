import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ConclaveSettingsComponent } from './conclave-settings.component';
import { ConclaveService } from '../conclave.service';

describe('ConclaveSettingsComponent', () => {
  let component: ConclaveSettingsComponent;
  let fixture: ComponentFixture<ConclaveSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConclaveSettingsComponent, NoopAnimationsModule],
      providers: [ConclaveService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclaveSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
