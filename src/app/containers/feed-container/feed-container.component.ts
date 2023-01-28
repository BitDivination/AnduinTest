import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable, Subject } from 'rxjs';
import { debounceTime, first, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { FeedPost, Post, User } from "src/app/models";
import { AppStateService } from "src/app/state";
import { FormControl } from '@angular/forms';
import { UpdateFeedSearchTerm } from '../../state/app-state.actions';

const FEED_LENGTH: number = 10;

/**
 * Container component that shows a list of feed posts
 */
@Component({
  selector: 'app-feed-container',
  templateUrl: './feed-container.component.html',
  styleUrls: ['./feed-container.component.scss']
})
export class FeedContainerComponent implements OnInit, OnDestroy {

    private _unsubscribe$: Subject<void> = new Subject();

    searchInput: FormControl = new FormControl('');
    searchInputChange$: Observable<string> = this.searchInput.valueChanges.pipe(
        debounceTime(333),
        switchMap(searchTerm => this.store.dispatch(new UpdateFeedSearchTerm(searchTerm))),
        takeUntil(this._unsubscribe$)
    );

  // Create a list of "Feed" display objects (post and the user responsible for it)
  feed$: Observable<FeedPost[]> = this.store.select(AppStateService.getFilteredPosts).pipe(
      // Limit to top ten posts
      map(posts => posts.slice(0, posts.length > FEED_LENGTH ? FEED_LENGTH : posts.length)),
      // Get the users...
      switchMap(posts => this.store.select(AppStateService.users).pipe(
          // ...and map them to the post if available
          map(users => posts.map(post => {
              const feedPost: FeedPost = { post };
              const user: User = users.find(userTemp => userTemp.id === post.id);
              if (user) {
                feedPost.user = user;
              }
              return feedPost;
            }))
        )),
    );

  constructor(private readonly store: Store) { }

    ngOnInit(): void {
      // Initialize the search input to whatever is in state
      this.store.select(AppStateService.getFeedSearchTerm).pipe(
          tap(storedSearchTerm => this.searchInput.setValue(storedSearchTerm, { emitEvent: false })),
          first()
      ).subscribe();

      // Start listening to changes in the search input
      this.searchInputChange$.subscribe();
    }

    ngOnDestroy(): void {
      this._unsubscribe$.next();
      this._unsubscribe$.complete();
    }
}

export const FEED_PATH: string = "feed";
export const FEED_ROUTE: Route = { path: FEED_PATH, component: FeedContainerComponent };
