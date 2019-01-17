import { async, TestBed } from '@angular/core/testing';
import { FeatureRestaurantMenuModule } from './feature-restaurant-menu.module';

describe('FeatureRestaurantMenuModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureRestaurantMenuModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureRestaurantMenuModule).toBeDefined();
  });
});
