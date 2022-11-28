import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from '../../services/omdb.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  personajes: any = [];

  constructor(private router: ActivatedRoute, private serviceOmdb: OmdbService) {
    
  }

  ngOnInit(): void {
    this.serviceOmdb.getAllPersonajes().subscribe(resp => {
      this.personajes = resp.results;
      console.log(this.personajes[0]);
    })
  }

}
