import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TextStyling } from 'src/app/models/text-styling.model';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() text: string

  constructor() { }

  ngOnInit(): void {
    
  }


}
