import {Injectable} from "@angular/core";
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe("Dummy", "Dummy", "http://www.themakeupdummy.com/wp-content/uploads/2016/05/Healthy-Heavenly-Cheesecake-recipe-by-The-Makeup-Dummy-blog.jpg", [new Ingredient('cos1', 2), new Ingredient('cos2', 4)]),
    new Recipe("Dummy2", "Dummy2", "http://everydayquotes.net/wp-content/uploads/2016/03/funny-sex.jpg", [])]
    ;

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }

}
