import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { API_BASE_PROVIDER } from './services';
import { NgxsModule, Store } from '@ngxs/store';
import { AppStateService } from './state';
import { GetComments, GetPosts, GetUsers } from './state/app-state.actions';
import { FeedContainerComponent, UserContainerComponent, PostContainerComponent } from './containers';
import { FeedPostComponent } from './components/feed-post/feed-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { TrashComponent } from './components/trash/trash.component';

export const MATERIAL_IMPORTS: (any[] | Type<any> | ModuleWithProviders<{}>)[] = [
    MatCardModule,
    MatToolbarModule,
    MatInputModule
  ];

@NgModule({
  declarations: [
    AppComponent,
    FeedContainerComponent,
    UserContainerComponent,
    PostContainerComponent,
    FeedPostComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([AppStateService], { developmentMode: true }),
	  SharedModule,

    // Material Imports
    ...MATERIAL_IMPORTS
  ],
  providers: [
    API_BASE_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Load all of the API Based data
  constructor(private readonly store: Store) {
    this.store.dispatch([
        new GetUsers(),
        new GetPosts(),
        new GetComments()
      ]);
  }
}
