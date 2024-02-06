import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnoLetivoComponent } from './lista-ano-letivo.component';

describe('ListaAnoLetivoComponent', () => {
  let component: ListaAnoLetivoComponent;
  let fixture: ComponentFixture<ListaAnoLetivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAnoLetivoComponent]
    });
    fixture = TestBed.createComponent(ListaAnoLetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
