import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgMngComponent } from './asg-mng.component';

describe('AsgMngComponent', () => {
  let component: AsgMngComponent;
  let fixture: ComponentFixture<AsgMngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsgMngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsgMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
