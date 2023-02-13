import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrySamplePageComponent } from './try-sample-page.component';

describe('TrySamplePageComponent', () => {
  let component: TrySamplePageComponent;
  let fixture: ComponentFixture<TrySamplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrySamplePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrySamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
