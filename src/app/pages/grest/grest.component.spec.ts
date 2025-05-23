import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrestComponent } from './grest.component';

describe('GrestComponent', () => {
  let component: GrestComponent;
  let fixture: ComponentFixture<GrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
