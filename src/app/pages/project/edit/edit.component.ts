import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Entity, Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: number;
  project!: Project;
  form!: FormGroup;
  
  constructor(
    public projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['projectId'];
    this.projectService.find(this.id).subscribe((data: Entity)=>{
      this.project = data.project;
    });
    
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      introduction: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required)

    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.projectService.update(this.id, this.form.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('project/index');
    })
  }

}
