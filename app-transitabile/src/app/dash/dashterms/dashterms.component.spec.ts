import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashtermsComponent } from './dashterms.component';

describe('DashtermsComponent', () => {
  let component: DashtermsComponent;
  let fixture: ComponentFixture<DashtermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashtermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashtermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
