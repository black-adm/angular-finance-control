import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs';
import { Category } from '../../shared/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl: string = "api/categories" 

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get(this.baseUrl)
      .pipe(
        catchError(this.handleError),
        map(this.jsonDataToCategories)
      )
  }

  getById(id: number): Observable<Category> {
    const url = `${this.baseUrl}/${id}`

    return this.http.get(url)
      .pipe(
        catchError(this.handleError),
        map(this.jsonDataToCategory)
      )
  }

  create(category: Category): Observable<Category> {
    return this.http.post(this.baseUrl, category)
      .pipe(
        catchError(this.handleError),
        map(this.jsonDataToCategory)
      )
  }

  update(category: Category): Observable<Category> {
    const path = `${this.baseUrl}/${category.id}`

    return this.http.put(path, category)
      .pipe(
        catchError(this.handleError),
        map(() => category)
      )
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`

    return this.http.delete(url)
      .pipe(
        catchError(this.handleError),
        map(() => null)
      )
  }  

  private jsonDataToCategories(jsonData: []): Category[] {
    const categories: Category[] = []
    
    jsonData.forEach(e => categories.push(e as Category))
    return categories
  }

  private jsonDataToCategory(jsonData: {}): Category {
    return jsonData as Category
  }

  private handleError(error: any): Observable<any> {
    throw new Error('Erro ao processar requisição : ', error)
  }

}
