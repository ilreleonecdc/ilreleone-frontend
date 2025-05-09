import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagniaComponent } from './compagnia.component';

describe('CompagniaComponent', () => {
  let component: CompagniaComponent;
  let fixture: ComponentFixture<CompagniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompagniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompagniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
