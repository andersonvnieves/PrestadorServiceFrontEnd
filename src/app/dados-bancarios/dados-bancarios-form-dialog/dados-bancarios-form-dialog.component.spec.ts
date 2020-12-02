import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBancariosFormDialogComponent } from './dados-bancarios-form-dialog.component';

describe('DadosBancariosFormDialogComponent', () => {
  let component: DadosBancariosFormDialogComponent;
  let fixture: ComponentFixture<DadosBancariosFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosBancariosFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosBancariosFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
