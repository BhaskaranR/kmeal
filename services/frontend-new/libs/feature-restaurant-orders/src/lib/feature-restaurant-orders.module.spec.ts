import { async, TestBed } from '@angular/core/testing';
import { FeatureRestaurantOrdersModule } from './feature-restaurant-orders.module';

describe('FeatureRestaurantOrdersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureRestaurantOrdersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureRestaurantOrdersModule).toBeDefined();
  });
});
