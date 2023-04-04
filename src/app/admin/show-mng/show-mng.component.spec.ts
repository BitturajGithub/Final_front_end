import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMngComponent } from './show-mng.component';

describe('ShowMngComponent', () => {
  let component: ShowMngComponent;
  let fixture: ComponentFixture<ShowMngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
