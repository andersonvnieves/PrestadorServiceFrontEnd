import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorPageComponent } from './prestador-page.component';

describe('PrestadorPageComponent', () => {
  let component: PrestadorPageComponent;
  let fixture: ComponentFixture<PrestadorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
