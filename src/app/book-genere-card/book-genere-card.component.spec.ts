import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGenereCardComponent } from './book-genere-card.component';

describe('BookGenereCardComponent', () => {
  let component: BookGenereCardComponent;
  let fixture: ComponentFixture<BookGenereCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGenereCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGenereCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
