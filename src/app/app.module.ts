import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/secure/article/article.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ArticleService } from './services/article.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './components/public/login/login.component';
import { UserComponent } from './components/public/user/user.component';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.services';
import { ArticlePreviewComponent } from './components/secure/article/components/article-preview/article-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    PageNotFoundComponent,
    LoginComponent,
    UserComponent,
    ArticlePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    ArticleService,
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
