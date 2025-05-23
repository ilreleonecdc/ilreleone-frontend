import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { ContattoService } from '../../services/contatto.service';

@Component({
  selector: 'app-contatti',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule, TextareaModule, FormsModule],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss'
})
export class ContattiComponent implements OnInit{
  inviato = false;
  errore = false;

  readonly contattoService: ContattoService = inject(ContattoService);
  readonly formBuilder: FormBuilder = inject(FormBuilder);
  readonly http: HttpClient = inject(HttpClient);
  public form?: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      messaggio: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form?.valid) {
      const contattoToSend = {
        ...this.form?.value,
      };
      this.contattoService.sendContatto(contattoToSend).subscribe({
        next: () => {
          this.inviato = true;
          this.errore = false;
          this.form?.reset;
        },
        error: () => {
          this.errore = true;
          this.inviato = false;
        }
      });
    }
  }
}
