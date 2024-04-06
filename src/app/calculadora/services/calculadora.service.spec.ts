import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service'; // Verifique o caminho correto

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService], // Inclua o serviço nos providers
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', () => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  });

  it('deve garantir que 1 - 4 = -3', () => {
    let subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(-3);
  });

  it('deve garantir que 1 * 4 = 4', () => {
    let multiplicacao = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(4);
  });

  it('deve retornar 0 para operação inválida', () => {
    let resultado = service.calcular(1, 4, '%');
    expect(resultado).toEqual(0);
  });
});
