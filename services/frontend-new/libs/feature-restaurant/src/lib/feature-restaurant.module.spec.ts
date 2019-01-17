import { async, TestBed } from "@angular/core/testing";
import { FeatureRestaurantModule } from "./feature-restaurant.module";

describe("FeatureRestaurantModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureRestaurantModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(FeatureRestaurantModule).toBeDefined();
  });
});
