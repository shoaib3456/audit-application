import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsAndSitesComponent } from './standards-and-sites.component';

describe('StandardsAndSitesComponent', () => {
  let component: StandardsAndSitesComponent;
  let fixture: ComponentFixture<StandardsAndSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardsAndSitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardsAndSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
