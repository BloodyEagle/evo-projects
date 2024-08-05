import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {RecipesService} from "../../services/recipes.service";
import {GetAllPosts} from "../../interfaces/recipes/get-all-posts";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {LikeService} from "../../services/like.service";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public sliderRecipes: GetAllPosts[] = []
  public bestRecipes: GetAllPosts[] = []
  public bestCount: number = 3;

  constructor(
    private title: Title,
    private meta: Meta,
    public recipesService: RecipesService,
    private notifier: ToastrService,
    private activatedRoute: ActivatedRoute,
    private likeService: LikeService
  ) {
  }


  ngOnInit() {
    this.title.setTitle('Foodie: Главная')
    this.meta.addTags([{name: 'og:type', content: 'website'},
      {name: 'og:title', content: 'Сборник кулинарных рецептов, для всей семьи'},
      {name: 'og:description', content: 'У нас вы найдете самые вкусные рецепты со всего света'}])
    this.meta.addTag({name: 'description', content: 'Сборник кулинарных рецептов, для всей семьи'})

    this.activatedRoute.data.subscribe({
      next: ({recipes}) => {
        this.recipesService.allRecipes = recipes;
        this.sliderRecipes = recipes.slice(0, 3);
        this.recipesService.fillAllRandom();
//        this.bestRecipes = this.recipesService.fullRandomRecipes.slice(0, 3);
        this.likeService.getLikes();
      },
      error: error => {
        this.notifier.error(error.error.message, 'Ошибка получения рецептов');
      }
    });
  }

}
