import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTurmaComponent } from './lista-turma.component';

describe('ListaTurmaComponent', () => {
  let component: ListaTurmaComponent;
  let fixture: ComponentFixture<ListaTurmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTurmaComponent]
    });
    fixture = TestBed.createComponent(ListaTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
