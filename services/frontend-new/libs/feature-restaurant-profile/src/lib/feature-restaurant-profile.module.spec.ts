import { async, TestBed } from '@angular/core/testing';
import { FeatureRestaurantProfileModule } from './feature-restaurant-profile.module';

describe('FeatureProfileModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureRestaurantProfileModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureRestaurantProfileModule).toBeDefined();
  });
});
