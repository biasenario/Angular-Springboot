import { Component, OnInit } from '@angular/core';
import {Pessoa} from '../pessoa';
import {PessoaService} from '../pessoa.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  submitted = false;

  constructor(private pessoaService: PessoaService,
              private router: Router) { }

  ngOnInit() {
  }

  newPessoa(): void {
    this.submitted = false;
    this.pessoa = new Pessoa();
  }

  save() {
    this.pessoaService.createPessoa(this.pessoa)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.pessoa = new Pessoa();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/pessoas']);
  }

}
