import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChatSectionComponent } from './demo-chat-section.component';

describe('DemoChatSectionComponent', () => {
  let component: DemoChatSectionComponent;
  let fixture: ComponentFixture<DemoChatSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoChatSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoChatSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
