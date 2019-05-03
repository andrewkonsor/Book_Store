import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent //canActivate: [AuthGuard]
},
    { path: 'book-list', component: BookListComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);