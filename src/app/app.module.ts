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



@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent,
    FeedCardItemComponent,
    NotFoundComponent,
    HeaderComponent
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
