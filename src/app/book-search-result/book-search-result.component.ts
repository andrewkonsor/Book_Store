import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService} from '../book.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-book-search-result',
  templateUrl: './book-search-result.component.html',
  styleUrls: ['./book-search-result.component.css']
})
export class BookSearchResultComponent implements OnInit {
  books: Book[] = [];
  searchBooks: Book[] = [];

  constructor(private bookService: BookService,
    private cookie: CookieService) { }

  ngOnInit() {
    this.bookService.getBooks()
    .subscribe(data => {this.books = data;
      for(let x of this.books){
        console.log(x);
        if(x.Title.toLocaleLowerCase().includes(this.cookie.get("search").toLocaleLowerCase()))
          this.searchBooks.push(x);
        if(x.Author.toLocaleLowerCase().includes(this.cookie.get("search").toLocaleLowerCase()))
          this.searchBooks.push(x);
        if(x.ISBN == parseInt(this.cookie.get("search")))
          this.searchBooks.push(x);
      }
      console.log(data);
    });
  }

}
