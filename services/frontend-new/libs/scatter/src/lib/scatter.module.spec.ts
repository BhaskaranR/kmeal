import { async, TestBed } from '@angular/core/testing';
import { ScatterModule } from './scatter.module';

describe('ScatterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScatterModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScatterModule).toBeDefined();
  });
});
