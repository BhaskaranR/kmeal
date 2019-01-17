import { async, TestBed } from '@angular/core/testing';
import { FeatureOrderModule } from './feature-order.module';

describe('FeatureOrderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureOrderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureOrderModule).toBeDefined();
  });
});
