import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ConclaveSettingsComponent } from './conclave-settings.component';
import { ConclaveService } from '../conclave.service';

describe('ConclaveSettingsComponent interaction', () => {
  let fixture: ComponentFixture<ConclaveSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConclaveSettingsComponent, NoopAnimationsModule],
      providers: [ConclaveService],
    }).compileComponents();

    fixture = TestBed.createComponent(ConclaveSettingsComponent);
    fixture.detectChanges();
  });

  it('renders a list after Generate is clicked', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    const items = fixture.nativeElement.querySelectorAll('mat-list-item');
    expect(items.length).toBe(6);
  });

  it('renders the requested number of conclaves when the count changes', () => {
    const component = fixture.componentInstance;

    component.numberOfConclaves = 8;
    component.onNumberChanged();
    fixture.detectChanges();

    const items = fixture.nativeElement.querySelectorAll('mat-list-item');
    expect(items.length).toBe(8);
  });
});
