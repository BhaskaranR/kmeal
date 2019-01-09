import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EosioAccountComponent } from './eosio-account.component';

describe('EosioAccountComponent', () => {
  let component: EosioAccountComponent;
  let fixture: ComponentFixture<EosioAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EosioAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EosioAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
