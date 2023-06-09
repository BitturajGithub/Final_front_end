import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLeaveComponent } from './show-leave.component';

describe('ShowLeaveComponent', () => {
  let component: ShowLeaveComponent;
  let fixture: ComponentFixture<ShowLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
