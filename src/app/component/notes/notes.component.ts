import { Component, OnInit} from '@angular/core';
import { Note } from "../../Note";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  notes: Note[] = [];

  comstrutor(){
  }

  ngOnInit(): void{
    this.notes = [
      {
        id: 1,
        title: "Title1",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content.1",
        active: true,
        status: "In-progress",
        auther: "auther1"
      },
          {
        id: 2,
        title: "Title2",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content.2",
        active: true,
        status: "In-progress",
        auther: "auther2"
      },
          {
        id: 3,
        title: "Title3",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content.3",
        active: true,
        status: "In-progress",
        auther: "auther3"
      },
          {
        id: 4,
        title: "Title4",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content.4",
        active: true,
        status: "In-progress",
        auther: "auther4"
      }
    ];
  }

  done(note1: Note){
    console.log("This Task is done: "+ note1.id);
    let i = this.notes.indexOf(note1);
    this.notes.splice(i,1);
  }
}
