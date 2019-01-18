import { async, TestBed } from "@angular/core/testing";
import { FeatureCoreModule } from "./feature-core.module";

describe("FeatureCoreModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureCoreModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(FeatureCoreModule).toBeDefined();
  });
});
