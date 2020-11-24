import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project ,Entity} from '../../models/project';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id!: number;
  project!: Project;
   
  constructor(
    public postService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['projectId'];
      
    this.postService.find(this.id).subscribe((data: Entity)=>{
      this.project = data.project;
    });
  }
}
