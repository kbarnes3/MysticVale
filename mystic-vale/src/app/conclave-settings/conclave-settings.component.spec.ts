import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclaveSettingsComponent } from './conclave-settings.component';

describe('ConclaveSettingsComponent', () => {
  let component: ConclaveSettingsComponent;
  let fixture: ComponentFixture<ConclaveSettingsComponent>;

  beforeEach(async(() => {
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
