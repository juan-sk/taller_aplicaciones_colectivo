import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisFlotaComponent } from './vis-flota.component';

describe('VisFlotaComponent', () => {
  let component: VisFlotaComponent;
  let fixture: ComponentFixture<VisFlotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisFlotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisFlotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
