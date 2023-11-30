import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { ActivePostsComponent } from './active-posts/active-posts.component'; 
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component'; 
import { NavbarComponent } from './navbar/navbar.component'; 
import { PostCardComponent } from './post-card/post-card.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { UsersComponent } from './users/users.component'; 

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'activePosts',
        component: ActivePostsComponent
    },
    {
        path: 'inactivePosts',
        component: InactivePostsComponent
    },
    {
        path: 'post/:id',
        component: PostsDetailsComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
    }
]

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ActivePostsComponent,
        InactivePostsComponent,
        NavbarComponent,
        PostCardComponent,
        PostsDetailsComponent,
        UsersComponent
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}