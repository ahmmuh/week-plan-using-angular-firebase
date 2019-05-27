import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note: Note = {
    name: ''

  }
  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  addNote(){

    if(this.note.name != '' ){
      this.noteService.addNote(this.note);
  
    } 
  
  }

  getNotes(){
    this.noteService.getNotes()
    .subscribe(notes =>{
      console.log(notes);
      this.notes = notes;
    })
  }
}
