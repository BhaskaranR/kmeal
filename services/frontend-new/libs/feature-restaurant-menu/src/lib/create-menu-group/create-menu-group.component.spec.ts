import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMenuGroupComponent } from './create-menu-group.component';

describe('CreateMenuGroupComponent', () => {
  let component: CreateMenuGroupComponent;
  let fixture: ComponentFixture<CreateMenuGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMenuGroupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMenuGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
