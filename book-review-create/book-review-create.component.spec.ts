import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReviewCreateComponent } from './book-review-create.component';

describe('BookReviewCreateComponent', () => {
  let component: BookReviewCreateComponent;
  let fixture: ComponentFixture<BookReviewCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookReviewCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReviewCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
