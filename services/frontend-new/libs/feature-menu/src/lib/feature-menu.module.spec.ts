import { async, TestBed } from '@angular/core/testing';
import { FeatureMenuModule } from './feature-menu.module';

describe('FeatureMenuModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureMenuModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureMenuModule).toBeDefined();
  });
});
