import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit {
   
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-9878',
                duration: 120,
                rating: 4.4,
                releaseDate: 'December, 02, 2021'
              },
         {

                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 46.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                releaseDate: 'November, 5, 2021'
        }        
    ]
  }

}