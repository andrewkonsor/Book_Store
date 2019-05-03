import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  @Input() textValue: string = ""; 

  constructor(private cookie: CookieService) {

  }
   search(inputString: string) {
     console.log("Search clicked... searching"); 
     this.textValue = inputString; 
     //Response (if there is a result) save info in cookie
     if(this.textValue.length == 0) {
      console.log("Search completed, empty search.") 
      return; //do nothing
     }
     else {

      //connect to firebase and then search through database to find something
      this.cookie.set("search", this.textValue); 
      
      console.log("Something found... found this " + this.cookie.get("search"));
     }

   }

  ngOnInit() {
  }

}
