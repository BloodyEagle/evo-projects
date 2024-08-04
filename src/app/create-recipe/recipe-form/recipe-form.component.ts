import {Component, Input, OnInit} from '@angular/core';

import {CreatePostDto} from "../../interfaces/recipes/create-post-dto";
import {RecipesService} from "../../services/recipes.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {delay, of} from "rxjs";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  @Input() new_recipe: CreatePostDto = {
    body: '', title: '', image: '', timeCooking: null,
    tags: [''],
    foodValue: {calories: null, fats: null, proteins: null, carbohydrates: null},
    cookingSteps: [{title: '', description: ''}],
    ingredients: [{title: '', description: ''}]
  };
  @Input('edit') editMode: boolean = false;
  private id: string = '';
  public hasInvalidStep: { invalid: boolean[] } = {invalid: [false]};
  public hasInvalidIng: { invalid: boolean[] } = {invalid: [false]};

//  public clientForm!: FormGroup;

  constructor(
    public recipesService: RecipesService,
    private notifier: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    if (this.new_recipe.title !== '') {
      this.editMode = true;
    }
    console.log('В форме',this.new_recipe);
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      console.log('id=', this.id);
    })
  }

  onSubmit() {
    let isError: boolean = false;

    let i: number = 0;
    for (let step of this.new_recipe.cookingSteps) {
      if (step.title == '' || step.description == '') {
        this.hasInvalidStep.invalid[i++] = true;
        isError = true;
      } else {
        this.hasInvalidStep.invalid[i++] = false;
      }
    }

    i = 0;
    for (let ingredient of this.new_recipe.ingredients) {
      if (ingredient.title == '' || ingredient.description == '') {
        this.hasInvalidIng.invalid[i++] = true;
        isError = true;

      } else {
        this.hasInvalidIng.invalid[i++] = false;
      }
    }

    let errorMessge: string = '';
    if (this.hasInvalidIng.invalid.includes(true))
      errorMessge += 'Невалидные данные в ингредиентах.';
    if (this.hasInvalidStep.invalid.includes(true))
      errorMessge += 'Невалидные данные в шагах приготовления рецепта.';


    if (isError) {
      this.notifier.error(errorMessge, 'Ошибка валидации');
      return
    }

    if (!this.editMode) {
      this.recipesService.createRecipe(this.new_recipe).subscribe({
        next: (response) => {
          console.log('Рецепт сохранен: ', response);
          this.notifier.success('Рецепт сохранен!');
          this.router.navigateByUrl('/recipes');
        },
        error: (err) => {
          console.log('Ошибка сохранения рецепта: ', err);
          this.notifier.error(err.error.message, 'Ошибка сохранения рецепта');
        },
        complete: () => {
          console.log('complete');
        }
      });
    } else {
      this.recipesService.updateRecipe(this.id,this.new_recipe).subscribe({
        next: (response) => {
          console.log('Рецепт обновлен: ', response);
          this.notifier.success('Рецепт обновлен!');
          this.router.navigateByUrl('/admin/recipes');
        },
        error: (err) => {
          console.log('Ошибка обновления рецепта: ', err);
          this.notifier.error(err.error.message, 'Ошибка обновления рецепта');
        },
        complete: () => {
          console.log('complete');
        }
      });
    };
  }

  protected readonly console = console;
}
