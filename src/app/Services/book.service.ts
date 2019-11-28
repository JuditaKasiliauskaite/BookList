import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  GetBookInformation():Observable<any>{
    return this.http.get('http://localhost:3000/api/books');
  }

  AddBookInformation(bookTitle:string,author:string,img:string):Observable<any>{
    const book:Book = {bookTitle:bookTitle,author:author,img:img};
    return this.http.post('http://localhost:3000/api/books', book)
  }

  DeleteBook(id:String):Observable<any>{
    return this.http.delete('http://localhost:3000/api/books/'+id);
  }

  GetBooks(id:String):Observable<any>{
    return this.http.get('http://localhost:3000/api/books/'+id);
  }

  UpdateBooks(id:String,bookTitle:string,author:string,img:string):Observable<any>{
    const book:Book = {bookTitle:bookTitle,author:author,img:img};
    console.log("Edit"+id);
    return this.http.put('http://localhost:3000/api/books/'+id, book);
  }
}