import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments, Posts } from './../../models';
import { API_BASE } from './../constants';
import { delay } from 'rxjs/operators';

const EXAMPLE_USER_POST = {
	id: 1,
	user: {
		id: 1,
		userName: 'Anonymous'
	},
	title: 'This is TOTALLY a post',
	body: 'Like, I cannot even recount to you the legitness of this post',
};
const EXAMPLE_SYSTEM_POST = {
	id: 2,
	title: 'WHAT IS UP, MY FELLOW YOUTHS?',
	body: 'YOU ARE SO OHIO, MY DUDES',
	communicationType: 'ADVERTISEMENT',
	system: {
		id: 1,
		type: 'Automated',
		name: 'Big Brother',
	}
};

/**
 * API Service for the Posts Domain. Handles all of the different post based objects and communications.
 */
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
      private readonly http: HttpClient,
      @Inject(API_BASE) private readonly apiBase: string) { }

  /**
   * Get all of the available posts for all users
   * @returns Total list of posts for all users
   */
  getPosts(): Observable<Posts> {
    return this.http.get<Posts>(`${this.apiBase}/posts`).pipe(
			delay(Math.random() * 3000),
    );
  }

  /**
   * Get all Comments for all posts
   * @returns Total list of comments for all users
   */
  getComments(): Observable<Comments> {
    return this.http.get<Comments>(`${this.apiBase}/comments`);
  }
}
