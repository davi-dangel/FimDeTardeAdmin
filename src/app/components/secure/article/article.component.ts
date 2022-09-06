import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleForm: FormGroup 

  constructor(private articleService: ArticleService,
              private router: Router,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar
              ) 
  {
    this.createForm()
   }

  ngOnInit(): void {
    if(!sessionStorage.getItem('token')){
      this.snackBar.open("Faça o login", '', {duration: 6000})
      this.router.navigate(["/login"])
    }
  }

  createForm() : void {
    this.articleForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required)
    })
  }

  get title() {return this.articleForm.controls["title"]}
  get author() {return this.articleForm.controls["author"]}
  get text() {return this.articleForm.controls["text"]}

  onSubmit(){
    this.articleService.inserir(new Article(this.title.value, this.author.value, this.getTextValue())).subscribe({
      next: () => {
        this.snackBar.open("Inserido com sucesso", '', { duration: 6000 })
        this.resetFormValues()
      },
      error: error => {
        this.snackBar.open("Erro ao inserir texto", '', { duration: 6000 })
        console.log("Error: ", error)
      }
    })
  }

  getTextValue() : string {
    return this.text?.value
  }
  

  resetFormValues() : void {
    this.articleForm.reset()
  }

}
