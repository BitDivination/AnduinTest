import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

	observableOne$: Observable<string> = of('Hello World');
	observableTwo$: Observable<string> = of('Goodbye World');

	obs2RawValue: string;

  constructor() { }

	// This function runs when the application is destroyed
  ngOnInit(): void {
		this.observableOne$.subscribe(
			value => {
				console.log('Observable One:', value);
				this.observableTwo$.subscribe(x => this.obs2RawValue = x);
			}
		);
  }

	logicFunction(): boolean {
		return this.obs2RawValue === 'Goodbye World';
	}
}
