import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabilizadorComponent } from './contabilizador.component';

describe('ContabilizadorComponent', () => {
  let component: ContabilizadorComponent;
  let fixture: ComponentFixture<ContabilizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContabilizadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContabilizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
