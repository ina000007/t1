import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from "../../Note";

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent  implements OnInit{

  @Input() note: Note = new Note();

  @Output() noteDone: EventEmitter<Note> = new EventEmitter();

  constructor(){
  }

  ngOnInit(): void{
  }

  onClick(note: Note){
    this.noteDone.emit(note);
    console.log("Called on onClick!! note id: "+ note.id);
  }
}
