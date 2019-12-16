import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/user.model';
import { PostService } from 'src/app/core/services/http/post.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['Username', 'Title', 'Body'];
  posts: MatTableDataSource<Post>;
  titleSearchValue: string = '';
  bodySearchValue: string = '';

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
    this.loadPosts();
  }

  ngAfterViewInit() {
    merge(this.paginator.page)
      .pipe(
        tap(() => this.loadPosts())
      )
      .subscribe();
  }

  filterBySelectedWord(column) {
    if (window.getSelection) {
      const selectedWord = window.getSelection().toString()
      if (column === 'title') {
        this.titleSearchValue = selectedWord;
      } else {
        this.bodySearchValue = selectedWord;
      }
      this.paginator.pageIndex = 0;
      this.loadPosts();
    }
  }


  loadPosts() {
    return this.postService.getPosts(this.titleSearchValue, this.bodySearchValue, this.paginator.pageIndex, this.paginator.pageSize).subscribe((response: any) => {
      this.posts = new MatTableDataSource<Post>(response.body);
      this.paginator.length = response.headers.get('x-total-count');
    })
  }

}
