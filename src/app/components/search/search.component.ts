import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OmdbService } from '../../services/omdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  personajes: any = {};

  constructor(private serviceOmdb: OmdbService, private route: Router) { }

  ngOnInit(): void {
    this.serviceOmdb.getAllPersonajes().subscribe(resp => {
      this.personajes = resp.results;
      console.log(this.personajes);
    })
  }

  detalle(id: string) {
    this.route.navigate(['/detail', id])
  }
}
