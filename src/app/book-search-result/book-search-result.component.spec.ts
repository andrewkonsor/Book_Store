import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchResultComponent } from './book-search-result.component';

describe('BookSearchResultComponent', () => {
  let component: BookSearchResultComponent;
  let fixture: ComponentFixture<BookSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
