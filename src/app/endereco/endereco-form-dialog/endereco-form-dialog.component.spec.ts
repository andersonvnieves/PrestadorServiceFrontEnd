import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoFormDialogComponent } from './endereco-form-dialog.component';

describe('EnderecoFormDialogComponent', () => {
  let component: EnderecoFormDialogComponent;
  let fixture: ComponentFixture<EnderecoFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
