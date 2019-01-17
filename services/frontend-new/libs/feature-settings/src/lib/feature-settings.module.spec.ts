import { async, TestBed } from '@angular/core/testing';
import { FeatureSettingsModule } from './feature-settings.module';

describe('FeatureSettingsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureSettingsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureSettingsModule).toBeDefined();
  });
});
