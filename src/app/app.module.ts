import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsTableComponent } from './components/posts-table/posts-table.component';
import { UserComponent } from './pages/user/user.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatFormField, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatDialogContent, MatDialogModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BaseService } from './core/services/http/base.service';
import { PostService } from './core/services/http/post.service';
import { UserService } from './core/services/http/user.service';
import { FormsModule } from '@angular/forms';
import { MAT_HAMMER_OPTIONS } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,

    PostsTableComponent,

    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [{
    provide: MAT_HAMMER_OPTIONS,
    useValue: {
      cssProps: {
        userSelect: true
      }
    },
  },
    BaseService,
    PostService, 
    UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
