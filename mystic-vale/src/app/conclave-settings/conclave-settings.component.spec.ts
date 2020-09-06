import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConclaveSettingsComponent } from './conclave-settings.component';

describe('ConclaveSettingsComponent', () => {
  let component: ConclaveSettingsComponent;
  let fixture: ComponentFixture<ConclaveSettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConclaveSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclaveSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
