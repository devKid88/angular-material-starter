import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, } from 'rxjs/operators';

import { TransportService } from './transport.service';

export interface PaginatedResult<T> {
  total_count: number;
  items: T[];
}

@Injectable()
export class BaseApiService<T> {

  name: string;

  constructor(
    public transport: TransportService
  ) { }

  getAll(condition: any = {}): Observable<PaginatedResult<T>> {
    return this.getAllWithPagination(this.name, condition);
  }

  getById(id: number, condition: any = {}): Observable<T> {
    return this.transport.get(`${this.name}/${id}`, condition)
      .pipe(
        map(response => <T>response),
        catchError(this.handleError)
      );
  }

  create(item: T): Observable<T> {
    return this.transport.post(this.name, item)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(id: number, item: T): Observable<T> {
    return this.transport.put(`${this.name}/${id}`, item)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id: number): Observable<T> {
    return this.transport.delete(`${this.name}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private getAllWithPagination(route: string, condition: any = {}): Observable<PaginatedResult<T>> {
    return this.transport.get(route, condition, true)
      .pipe(
        map(response => ({
          total_count: response.headers.has('X-Pagination-Total-Count') ?
            response.headers.get('X-Pagination-Total-Count') : response.body.length,
          items: response.body
        })),
        catchError(this.handleError)
      );
  }

  private handleError(error: Response | any) {
    let errorMessage: any = {};
    // Connection error
    if (error.status === 0) {
      errorMessage = {
        success: false,
        status: 0,
        data: 'Sorry, there was a connection error occurred. Please try again.',
      };
    } else {
      errorMessage = error;
    }
    return throwError(errorMessage);
  }
}
