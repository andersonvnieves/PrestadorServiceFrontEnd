import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBancariosExcluirDialogComponent } from './dados-bancarios-excluir-dialog.component';

describe('DadosBancariosExcluirDialogComponent', () => {
  let component: DadosBancariosExcluirDialogComponent;
  let fixture: ComponentFixture<DadosBancariosExcluirDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosBancariosExcluirDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosBancariosExcluirDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
