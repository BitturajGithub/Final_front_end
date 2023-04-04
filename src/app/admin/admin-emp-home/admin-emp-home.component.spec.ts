import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmpHomeComponent } from './admin-emp-home.component';

describe('AdminEmpHomeComponent', () => {
  let component: AdminEmpHomeComponent;
  let fixture: ComponentFixture<AdminEmpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEmpHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEmpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
