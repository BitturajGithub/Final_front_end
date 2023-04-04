import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MngHomeComponent } from './mng-home.component';

describe('MngHomeComponent', () => {
  let component: MngHomeComponent;
  let fixture: ComponentFixture<MngHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MngHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MngHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
