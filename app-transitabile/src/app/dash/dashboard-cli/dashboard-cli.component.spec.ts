import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCliComponent } from './dashboard-cli.component';

describe('DashboardCliComponent', () => {
  let component: DashboardCliComponent;
  let fixture: ComponentFixture<DashboardCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
