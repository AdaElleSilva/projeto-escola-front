import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnoSerieComponent } from './lista-ano-serie.component';

describe('ListaAnoSerieComponent', () => {
  let component: ListaAnoSerieComponent;
  let fixture: ComponentFixture<ListaAnoSerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAnoSerieComponent]
    });
    fixture = TestBed.createComponent(ListaAnoSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
