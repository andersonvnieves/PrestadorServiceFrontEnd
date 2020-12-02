import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorTableComponent } from './prestador-table.component';

describe('PrestadorTableComponent', () => {
  let component: PrestadorTableComponent;
  let fixture: ComponentFixture<PrestadorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadorTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
