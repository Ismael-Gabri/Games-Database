import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonInfoComponent } from './botton-info.component';

describe('BottonInfoComponent', () => {
  let component: BottonInfoComponent;
  let fixture: ComponentFixture<BottonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
