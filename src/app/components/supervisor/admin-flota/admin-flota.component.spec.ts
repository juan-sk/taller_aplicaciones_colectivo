import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFlotaComponent } from './admin-flota.component';

describe('AdminFlotaComponent', () => {
  let component: AdminFlotaComponent;
  let fixture: ComponentFixture<AdminFlotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFlotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFlotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
