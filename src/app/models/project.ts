

export interface Collection {
    
    projects: Project[];
    message: string;
}

export interface Entity {
    
    project: Project;
    message: string;
}

export interface Project {
    
    id: number;
    name: string;
    location: string;
    introduction: string;
    cost: number;
}