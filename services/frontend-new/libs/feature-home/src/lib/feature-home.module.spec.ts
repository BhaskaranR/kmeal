import { async, TestBed } from '@angular/core/testing';
import { FeatureHomeModule } from './feature-home.module';

describe('FeatureHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureHomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureHomeModule).toBeDefined();
  });
});
