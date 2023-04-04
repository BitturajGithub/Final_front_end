import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMngComponent } from './update-mng.component';

describe('UpdateMngComponent', () => {
  let component: UpdateMngComponent;
  let fixture: ComponentFixture<UpdateMngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
