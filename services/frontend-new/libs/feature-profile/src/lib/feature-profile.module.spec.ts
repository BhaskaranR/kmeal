import { async, TestBed } from '@angular/core/testing';
import { FeatureProfileModule } from './feature-profile.module';

describe('FeatureProfileModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureProfileModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureProfileModule).toBeDefined();
  });
});
