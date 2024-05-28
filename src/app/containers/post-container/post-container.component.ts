import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedContainerComponent } from '../feed-container/feed-container.component';

/**
 * Container component for a list of posts, intended to be the detail view of a single post for a user
 * TODO :: Implementation
 */
@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

	postId$: Observable<number> = this.activatedRoute.paramMap.pipe(
		map(paramMap => +paramMap.get('postId')),
	);

  constructor(
      private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() { }
}

export const POST_PATH = 'post';
export const POST_PATH_PARAM = 'postId';
export const POST_ROUTE: Route = { path: `${POST_PATH}/:${POST_PATH_PARAM}`, component: PostContainerComponent };
