import { Injectable } from '@angular/core';
import { LoggerConfigApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class RemoteLoggerServiceService {

  constructor(
		private readonly loggerConfigApiService: LoggerConfigApiService,
  ) { }

	log(message: string): void {
		console.log('RemoteLoggerServiceService: ', message);
	}
}
