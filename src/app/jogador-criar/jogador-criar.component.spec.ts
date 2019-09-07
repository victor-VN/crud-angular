import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorCriarComponent } from './jogador-criar.component';

describe('JogadorCriarComponent', () => {
  let component: JogadorCriarComponent;
  let fixture: ComponentFixture<JogadorCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogadorCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadorCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
