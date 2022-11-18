import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantFlotaComponent } from './mant-flota.component';

describe('MantFlotaComponent', () => {
  let component: MantFlotaComponent;
  let fixture: ComponentFixture<MantFlotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantFlotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantFlotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
