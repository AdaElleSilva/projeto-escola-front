import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAnoSerieComponent } from './cadastro-ano-serie.component';

describe('CadastroAnoSerieComponent', () => {
  let component: CadastroAnoSerieComponent;
  let fixture: ComponentFixture<CadastroAnoSerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAnoSerieComponent]
    });
    fixture = TestBed.createComponent(CadastroAnoSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
