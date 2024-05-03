import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../components/search/search.component';
import { Book } from '../../shared/models/Book';
import { BookService } from '../../services/Books/book.service';


@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,RouterLink,RouterLinkActive,SearchComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})

export class BookComponent {
  books:Book[] = [];
  constructor(private bookService:BookService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) =>{
      if(params['searchBook']){this.books=this.bookService.getAllBookBySearchTerm(params['searchBook']);}
      else{this.books=this.bookService.getAll();}
    });
  };
  ngOnInit():void{

  }
}
