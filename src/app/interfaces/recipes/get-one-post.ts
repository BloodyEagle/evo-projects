import {TzFoodValue} from "./tz-food-value";
import {TzCookingSteps} from "./tz-cooking-steps";
import {TzIngredients} from "./tz-ingredients";
import {Author} from "../users/author";
import {TzComments} from "../comments/tz-comments";

export interface GetOnePost {
  id: string;
  body: string;
  title: string;
  tags: string[];
  image: string;
  timeCooking: number | null;
  foodValue: TzFoodValue;
  cookingSteps: TzCookingSteps[];
  ingredients: TzIngredients[];
  author: Author;
  comments: TzComments[];
  createdOn: string;
  updatedOn: string;
}
