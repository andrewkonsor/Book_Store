import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BookSearchResultComponent } from './book-search-result/book-search-result.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent //canActivate: [AuthGuard]
},
    { path: 'book-list', component: BookListComponent},
    { path: 'book-create', component: BookCreateComponent},
    { path: 'shopping-cart', component: ShoppingCartComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'book-search-result', component: BookSearchResultComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);