import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store';
import { FeedMockDataService } from './services';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { FeedCardItemComponent } from './components/feed-card-item/feed-card-item.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedMenuComponent } from './components/feed-menu/feed-menu.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HomeComponent } from './shared/home/home.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';



@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent,
    FeedCardItemComponent,
    NotFoundComponent,
    HeaderComponent,
    FeedMenuComponent,
    LoadingComponent,
    HomeComponent,
    AuthorsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(FeedMockDataService), // Use mock data service
    AppRoutingModule,
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
