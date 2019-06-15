import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ArticleFirstComponent } from './article-first/article-first.component';
import { ArticleSecondComponent } from './article-second/article-second.component';
import { ArticleScrollComponent } from './article-scroll/article-scroll.component';
import { ScrollArticleFirstComponent } from './scroll-article-first/scroll-article-first.component';
import { ScrollArticleSecondComponent } from './scroll-article-second/scroll-article-second.component';
import { ScrollArticleThirdComponent } from './scroll-article-third/scroll-article-third.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticleFirstComponent,
    ArticleSecondComponent,
    ArticleScrollComponent,
    ScrollArticleFirstComponent,
    ScrollArticleSecondComponent,
    ScrollArticleThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
