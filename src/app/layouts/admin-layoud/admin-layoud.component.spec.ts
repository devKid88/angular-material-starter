import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoudComponent } from './admin-layoud.component';

describe('AdminLayoudComponent', () => {
  let component: AdminLayoudComponent;
  let fixture: ComponentFixture<AdminLayoudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayoudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
