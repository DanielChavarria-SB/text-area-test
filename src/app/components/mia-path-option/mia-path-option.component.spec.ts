import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPathOptionComponent } from './mia-path-option.component';

describe('MiaPathOptionComponent', () => {
  let component: MiaPathOptionComponent;
  let fixture: ComponentFixture<MiaPathOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPathOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiaPathOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
