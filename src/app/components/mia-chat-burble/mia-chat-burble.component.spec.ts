import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaChatBurbleComponent } from './mia-chat-burble.component';

describe('MiaChatBurbleComponent', () => {
  let component: MiaChatBurbleComponent;
  let fixture: ComponentFixture<MiaChatBurbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaChatBurbleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiaChatBurbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
