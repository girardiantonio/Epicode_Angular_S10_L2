import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { getPost } from 'src/app/services/post.service';

@Component({
    selector: 'app-post-attivi',
    templateUrl: './post-attivi.component.html',
    styleUrls: ['./post-attivi.component.scss']
})

export class PostAttiviComponent implements OnInit {
    posts: Post[] = [];

    constructor() {
        getPost().then(posts => {
            console.log(posts);
            this.posts = posts;
            this.activePosts();
            console.log(this.posts)
        })
    }

    ngOnInit(): void {
    }

    activePosts() {
        this.posts = this.posts.filter(post => post.active);
    }
}
