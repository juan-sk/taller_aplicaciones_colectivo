import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaPasajeroComponent } from './mapa-pasajero.component';

describe('MapaPasajeroComponent', () => {
  let component: MapaPasajeroComponent;
  let fixture: ComponentFixture<MapaPasajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaPasajeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
