import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPeriodoAulaComponent } from './lista-periodo-aula.component';

describe('ListaPeriodoAulaComponent', () => {
  let component: ListaPeriodoAulaComponent;
  let fixture: ComponentFixture<ListaPeriodoAulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPeriodoAulaComponent]
    });
    fixture = TestBed.createComponent(ListaPeriodoAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
