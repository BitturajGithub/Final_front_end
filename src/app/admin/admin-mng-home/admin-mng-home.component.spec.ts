import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMngHomeComponent } from './admin-mng-home.component';

describe('AdminMngHomeComponent', () => {
  let component: AdminMngHomeComponent;
  let fixture: ComponentFixture<AdminMngHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMngHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMngHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
