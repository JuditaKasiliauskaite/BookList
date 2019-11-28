import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/book.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyBooks: any = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.GetBookInformation().subscribe((data) => {
      this.MyBooks = data.books;
      console.log(this.MyBooks);
    })
  }
  onDelete(id:String){
    console.log("Deleting books with idof : "+id);
    this.bookService.DeleteBook(id).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }

}