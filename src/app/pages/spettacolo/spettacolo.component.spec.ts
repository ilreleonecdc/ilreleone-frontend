import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpettacoloComponent } from './spettacolo.component';

describe('SpettacoloComponent', () => {
  let component: SpettacoloComponent;
  let fixture: ComponentFixture<SpettacoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpettacoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpettacoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
