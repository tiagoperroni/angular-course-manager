import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./courses.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit {

    constructor(private courseService: CourseService) {}
   
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
                  
  }

}