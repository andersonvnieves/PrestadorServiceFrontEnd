import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoExcluirDialogComponent } from './endereco-excluir-dialog.component';

describe('EnderecoExcluirDialogComponent', () => {
  let component: EnderecoExcluirDialogComponent;
  let fixture: ComponentFixture<EnderecoExcluirDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoExcluirDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoExcluirDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
