import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrestadorPageComponent } from './form-prestador-page.component';

describe('FormPrestadorPageComponent', () => {
  let component: FormPrestadorPageComponent;
  let fixture: ComponentFixture<FormPrestadorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPrestadorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrestadorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
