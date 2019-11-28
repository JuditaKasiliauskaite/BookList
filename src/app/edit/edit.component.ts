import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {BookService} from '../Services/book.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
book:any=[];
  constructor(private bookService:BookService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.bookService.GetBooks(this.route.snapshot.params['id']).subscribe(
      (data) =>{
          this.book = data;
          console.log(this.book);
      }
    );

  }
  onEditBook(form:NgForm){
    console.log(form.value.bookTitle,form.value.author,form.value.img);
    this.bookService.UpdateBooks(this.book._id,form.value.bookTitle,form.value.author,form.value.img).
    subscribe();
  }
}
