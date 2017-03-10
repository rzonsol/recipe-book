import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output()
  recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe("Dummy", "Dummy", "http://www.themakeupdummy.com/wp-content/uploads/2016/05/Healthy-Heavenly-Cheesecake-recipe-by-The-Makeup-Dummy-blog.jpg");

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
