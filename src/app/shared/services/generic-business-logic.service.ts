import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericBusinessLogicService {

  constructor() { }

	veryImportantBusinessLogic(): void {
		console.log('Very important business logic that I would like to log');
	}
}
