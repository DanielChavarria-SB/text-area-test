import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateCardComponent } from './realestate-card.component';

describe('RealestateCardComponent', () => {
  let component: RealestateCardComponent;
  let fixture: ComponentFixture<RealestateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealestateCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealestateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
