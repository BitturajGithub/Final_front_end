import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdEmpComponent } from './upd-emp.component';

describe('UpdEmpComponent', () => {
  let component: UpdEmpComponent;
  let fixture: ComponentFixture<UpdEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
