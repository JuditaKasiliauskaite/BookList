import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { BookService } from '../Services/book.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  onAddBook(form: NgForm) {
   
    if(!form.valid)
    {
      return;
    }

    console.log(form.value)
    this.bookService.AddBookInformation(form.value.bookTitle,form.value.author,form.value.img).subscribe(
        ()=>{
        }
      );
    console.log(form.value);
   
  }

}