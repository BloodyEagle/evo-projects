import {Component, OnInit} from '@angular/core';
import {RecipesService} from "../../services/recipes.service";
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from "@angular/router";
import {GetAllPosts} from "../../interfaces/recipes/get-all-posts";
import {Meta, Title} from "@angular/platform-browser";
import {LikeService} from "../../services/like.service";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public recipes: GetAllPosts[] = [];

  constructor(
    public recipesService: RecipesService,
    private notifier: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private likeService: LikeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: ({recipes}) => {
        this.recipes = recipes;
        this.recipesService.allRecipes = this.recipes;
        this.recipesService.fillAllRandom();
      },
      error: error => {
        this.notifier.error(error.error.message, 'Ошибка получения рецептов');
      }
    });
    this.title.setTitle('Foodie: Каталог рецептовя')
    this.meta.addTags([{name: 'og:type', content: 'website'},
      {name: 'og:title', content: 'Foodie: Каталог рецептов'},
      {name: 'og:description', content: 'Все самые лучшие рецепты собраны здесь'}])
    this.meta.addTag({name: 'description', content: 'Все самые лучшие рецепты собраны здесь'})
  }

}
