import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMngComponent } from './add-mng.component';

describe('AddMngComponent', () => {
  let component: AddMngComponent;
  let fixture: ComponentFixture<AddMngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
