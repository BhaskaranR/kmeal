import { async, TestBed } from "@angular/core/testing";
import { FeatureNavigationBarModule } from "./feature-navigation-bar.module";

describe("FeatureNavigationBarModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureNavigationBarModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(FeatureNavigationBarModule).toBeDefined();
  });
});
