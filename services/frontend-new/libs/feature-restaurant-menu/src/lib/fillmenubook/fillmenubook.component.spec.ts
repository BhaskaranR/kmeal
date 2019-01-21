import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillmenubookComponent } from './fillmenubook.component';

describe('FillmenubookComponent', () => {
  let component: FillmenubookComponent;
  let fixture: ComponentFixture<FillmenubookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillmenubookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillmenubookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
