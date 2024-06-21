import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskZoneComponent } from './ask-zone.component';

describe('AskZoneComponent', () => {
  let component: AskZoneComponent;
  let fixture: ComponentFixture<AskZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
