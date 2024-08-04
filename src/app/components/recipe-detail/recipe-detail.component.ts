import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RecipesService} from "../../services/recipes.service";
import {GetOnePost} from "../../interfaces/recipes/get-one-post";
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";
import {UserService} from "../../services/user.service";
import {Subscription} from "rxjs";
import {ButtonIconTextComponent} from "../../tools/button-icon-text/button-icon-text.component";
import {FavoritesService} from "../../services/favorites.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  public recipe!: GetOnePost;
  public ourcomment: string = '';
  public shareButton = new ButtonIconTextComponent();
  @ViewChild('top') element?: ElementRef<HTMLHeadingElement>;
  protected readonly Component = Component;
  private id: string = '';
  private sub!: Subscription;

  constructor(public recipesService: RecipesService,
              private notifier: ToastrService,
              private activatedRoute: ActivatedRoute,
              private title: Title,
              private meta: Meta,
              public userService: UserService,
              public favoritesService: FavoritesService) {
  }

  public addComment(id: string, comment: string): void {
    this.recipesService.addCommentToRecipe(id, comment).subscribe({
      next: comment => {
        this.recipe = comment;
        this.notifier.success('Комментарий добавлен');
        this.ourcomment = '';
        this.recipesService.getOneRecipe(this.activatedRoute.snapshot.params['id']);
      },
      error: error => {
        this.notifier.error(error.error.message, 'Ошибка добавления комментария');
      }
    })
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });


    this.activatedRoute.data.subscribe({
      next: ({recipe}) => {
        this.recipe = recipe;
        this.element?.nativeElement.scrollIntoView({behavior: 'smooth'});
        this.title.setTitle(this.recipe.title)
        this.meta.addTags([{name: 'og:type', content: 'website'},
          {name: 'og:title', content: this.recipe.title},
          {name: 'og:description', content: this.recipe.body},
          {name: 'og:image', content: this.recipe.image}]);
        this.meta.addTag({name: 'description', content: this.recipe.body});
      },
      error: error => {
        this.notifier.error(error.error.message, 'Ошибка получения рецепта');
      }
    });

    if (this.recipesService.allRecipes.length === 0) {
      this.recipesService.getAllRecipes().subscribe({
        next: recipes => {
          this.recipesService.allRecipes = recipes;
          this.recipesService.fillAllRandom();
        },
        error: error => {
          this.notifier.error(error.error.message, 'Ошибка получения рецептов');
        }
      });
    }
    this.recipesService.fillAllRandom();
  }

  ngOnDestroy() {

  }
}
