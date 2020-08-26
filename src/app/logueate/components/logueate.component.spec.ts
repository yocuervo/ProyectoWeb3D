import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogueateComponent } from './logueate.component';

describe('LogueateComponent', () => {
  let component: LogueateComponent;
  let fixture: ComponentFixture<LogueateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogueateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogueateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
