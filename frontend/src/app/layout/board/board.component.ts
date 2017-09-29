import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
//import our Carousel Component
import {CarouselComponent} from '../carousel/carousel.component';


const BOARDS = [
  {name:'1', age:'1-2', city:'1-3', email:'1-4'},
  {name:'2', age:'2-2', city:'2-3', email:'2-4'},
  {name:'3', age:'3-2', city:'3-3', email:'3-4'},
  {name:'4', age:'4-2', city:'4-3', email:'4-4'},
]



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})


export class BoardComponent implements OnInit {

  boards: any = [];
  constructor(private boardService:BoardService) { }

  ngOnInit() {

    this.boards = BOARDS;
    //Retrive board from the API
    /*
    this.boardService.getAllPosts().subscribe(boards => {
      this.boards = boards;
    });
      */
  }

}
