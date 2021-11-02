import { Component, OnInit } from '@angular/core';
import { Collection, Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  projects: Project[] = [];
  
  constructor(public projectService: ProjectService) { }
  
  ngOnInit(): void {
    this.projectService.getAll().subscribe((data: Collection)=>{
      this.projects = data.projects;
     // console.log(this.projects.projects);
    })  
  }
  
  deletePost(id:number){
    this.projectService.delete(id).subscribe(res => {
         this.projects = this.projects.filter(item => item.id !== id);
         console.log('Project deleted successfully!');
    })
  }

}
