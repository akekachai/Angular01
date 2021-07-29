import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.css']
})
export class TestRequestGetComponent implements OnInit {
bookList: Book[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Book[]>('https://anapioficeandfire.com/api/books').subscribe(response=>{
    this.bookList = response;  
    // console.log('response',response);
    })
  }

  searchBookList(name: string)
  {
    this.http.get<Book[]>('https://anapioficeandfire.com/api/books?name='+name).subscribe(response=>{
      this.bookList = response;  
      // console.log('response',response);
      })
  }

  memberapi() {
    this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
       console.log('response',data);
  })
}

}
