import {Component, OnInit} from '@angular/core';
import {Category} from "../../../../models/category";
import {CategoriesService} from "../../../../services/categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  loading: boolean = false;
  categories: Category[];
  constructor(private categoryService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(result => {
      this.categories = result;
    })
  }
}
