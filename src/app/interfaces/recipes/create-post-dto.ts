import {TzFoodValue} from "./tz-food-value";
import {TzCookingSteps} from "./tz-cooking-steps";
import {TzIngredients} from "./tz-ingredients";

export interface CreatePostDto {
  body: string;
  title: string;
  tags: string[];
  image: string;
  timeCooking: number | null;
  foodValue: TzFoodValue;
  cookingSteps: TzCookingSteps[];
  ingredients: TzIngredients[];
}
