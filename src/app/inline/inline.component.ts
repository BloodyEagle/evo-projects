import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import { Location } from '@angular/common';


@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    private location: Location) {
  }

  ngOnInit() {
    this.title.setTitle('Open Graph Page');
    this.meta.addTag({name: 'og:title', content: 'The Rock'});
    this.meta.addTag({name: 'og:type', content: 'video.movie'});
    this.meta.addTag({name: 'og:url', content: '//www.imdb.com/title/tt0117500/'});
  }

  public goBack() {
    this.location.back();
  }
}
