import { async, TestBed } from "@angular/core/testing";
import { FeatureSearchModule } from "./feature-search.module";

describe("FeatureSearchModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureSearchModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(FeatureSearchModule).toBeDefined();
  });
});
