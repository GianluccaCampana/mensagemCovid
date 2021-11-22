import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirMensagemComponent } from './inserir-mensagem.component';

describe('InserirMensagemComponent', () => {
  let component: InserirMensagemComponent;
  let fixture: ComponentFixture<InserirMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirMensagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
