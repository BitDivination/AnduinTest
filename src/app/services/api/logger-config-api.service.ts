import { Injectable } from '@angular/core';
import { LoggerConfig } from '../../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerConfigApiService {

	/**
	 * [Mocked] Get the logger configuration during run time. Location is dynamic and can be changed.
	 */
	getLoggerConfig(): Observable<LoggerConfig> {
		return of({ location: 'remoteLoggerService.com' });
	}
}
