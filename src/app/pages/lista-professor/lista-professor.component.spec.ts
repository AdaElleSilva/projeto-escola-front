import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfessorComponent } from './lista-professor.component';

describe('ListaProfessorComponent', () => {
  let component: ListaProfessorComponent;
  let fixture: ComponentFixture<ListaProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProfessorComponent]
    });
    fixture = TestBed.createComponent(ListaProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
