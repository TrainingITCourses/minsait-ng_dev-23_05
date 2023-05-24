import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Store {
  private state$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  setState(state: any[]): void {
    this.state$.next([...state]);
  }

  getState(): any[] {
    return [...this.state$.getValue()];
  }

  getState$(): Observable<any[]> {
    return this.state$.asObservable().pipe(map((state) => [...state]));
  }
  select$(projection: (x: any[]) => any): Observable<any> {
    return this.getState$().pipe(map(projection), distinctUntilChanged());
  }
}
