import { async, TestBed } from "@angular/core/testing";
import { FeatureRestaurantDashboardModule } from "./feature-restaurant-dashboard.module";

describe("FeatureRestaurantDashboardModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureRestaurantDashboardModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(FeatureRestaurantDashboardModule).toBeDefined();
  });
});
