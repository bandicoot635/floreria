import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActulizarProductoComponent } from './actualizar-producto.component';

describe('ActulizarProductoComponent', () => {
  let component: ActulizarProductoComponent;
  let fixture: ComponentFixture<ActulizarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActulizarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActulizarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
