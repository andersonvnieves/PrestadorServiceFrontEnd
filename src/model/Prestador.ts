import { DadosBancarios } from './DadosBancarios';
import { Endereco } from './Endereco';

export interface Prestador {
  prestadorId: number;
  nomeCompleto: string;
  dataNascimento: Date;
  rg: string;
  cpf: string;
  cnh: string;
  validadeCNH: Date;
  email: string;
  celular: string;
  endereco: Endereco,
  dadosBancarios: DadosBancarios
}