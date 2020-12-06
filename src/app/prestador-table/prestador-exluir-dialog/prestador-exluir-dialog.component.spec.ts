import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorExluirDialogComponent } from './prestador-exluir-dialog.component';

describe('PrestadorExluirDialogComponent', () => {
  let component: PrestadorExluirDialogComponent;
  let fixture: ComponentFixture<PrestadorExluirDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadorExluirDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorExluirDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
