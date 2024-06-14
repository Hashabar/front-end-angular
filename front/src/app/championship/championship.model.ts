export interface Team {
    id: number;
    name: string;
    championship_id: number;
  }
  
  export interface Championship {
    id: number;
    name: string;
    teams: Team[];
  }