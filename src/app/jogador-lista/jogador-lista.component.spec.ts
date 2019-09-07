import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorListaComponent } from './jogador-lista.component';

describe('JogadorListaComponent', () => {
  let component: JogadorListaComponent;
  let fixture: ComponentFixture<JogadorListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogadorListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
