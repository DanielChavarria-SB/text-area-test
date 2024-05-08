import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaSelectionComponent } from './mia-selection.component';

describe('MiaSelectionComponent', () => {
  let component: MiaSelectionComponent;
  let fixture: ComponentFixture<MiaSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
