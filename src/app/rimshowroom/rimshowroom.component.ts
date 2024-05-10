import { Component, OnInit } from '@angular/core';
import { rimShowroomModel } from '../models/rimShowroomModel';
import { RimshowroomService } from '../service/rimshowroom.service';

@Component({
  selector: 'app-rimshowroom',
  templateUrl: './rimshowroom.component.html',
  styleUrls: ['./rimshowroom.component.css']
})
export class RimshowroomComponent implements OnInit {
  listshowroom: rimShowroomModel[] = [];
  selectedShowroom: rimShowroomModel | undefined;

  constructor(private rimshowroomService: RimshowroomService) { }

  ngOnInit(): void {
    this.rimshowroomService.getShowrooms().subscribe((showrooms: rimShowroomModel[]) => {
      this.listshowroom = showrooms;
    });
  }

  deleteShowroom(id: any): void {
    this.rimshowroomService.deleteShowroom(id).subscribe(() => {
      this.listshowroom = this.listshowroom.filter(showroom => showroom.id !== id);
    });
  }

  
}
