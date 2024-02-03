import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPessoaComponent } from './lista-pessoa.component';

describe('ListaPessoaComponent', () => {
  let component: ListaPessoaComponent;
  let fixture: ComponentFixture<ListaPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPessoaComponent]
    });
    fixture = TestBed.createComponent(ListaPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
