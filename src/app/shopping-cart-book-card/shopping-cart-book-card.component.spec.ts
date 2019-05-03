import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartBookCardComponent } from './shopping-cart-book-card.component';

describe('ShoppingCartBookCardComponent', () => {
  let component: ShoppingCartBookCardComponent;
  let fixture: ComponentFixture<ShoppingCartBookCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartBookCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
