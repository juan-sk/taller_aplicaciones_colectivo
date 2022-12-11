import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModFlotaComponent } from './mod-flota.component';

describe('ModFlotaComponent', () => {
  let component: ModFlotaComponent;
  let fixture: ComponentFixture<ModFlotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModFlotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModFlotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
