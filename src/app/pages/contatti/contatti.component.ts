import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { ContattoService } from '../../services/contatto.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { SelectModule } from 'primeng/select';
import { MessageService } from 'primeng/api';
import { Contatto } from '../../models/contatto.model';

@Component({
  selector: 'app-contatti',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    TextareaModule,
    FormsModule,
    FloatLabelModule,
    MessageModule,
    ToastModule,
    SelectModule
  ],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss'
})
export class ContattiComponent implements OnInit{
  inviato = false;
  errore = false;

  private readonly contattoService: ContattoService = inject(ContattoService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private messageService: MessageService = inject(MessageService);

  public form!: FormGroup;

  opzioniOggetto = [
    {label: 'Iscrizione Oratorio', value: 'Iscrizione Oratorio'},
    {label: 'Iscrizione Grest', value: 'Iscrizione Grest'},
    {label: 'Supporto Tecnico', value: 'Supporto Tecnico'},
    {label: 'Richiesta Collaborazione', value: 'Richiesta Collaborazione'},
    {label: 'Altro', value: 'Altro'},
  ]

  constructor() { }

  ngOnInit(): void {
    this.generateForm();
    this.form.reset();
  }

  generateForm() {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      oggetto: ['', [Validators.required]],
      messaggio: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const contattoToSend: Contatto = new Contatto();
      contattoToSend.nome = this.form.value.nome;
      contattoToSend.cognome = this.form.value.cognome;
      contattoToSend.email = this.form.value.email;
      contattoToSend.oggettoRichiesta = this.form.value.oggetto;
      contattoToSend.messaggio = this.form.value.messaggio;

      this.contattoService.sendContatto(contattoToSend).subscribe({
        next: () => {
          this.inviato = true;
          this.errore = false;
          console.log(contattoToSend)
          this.form.reset();
          this.messageService.add({ severity: 'success', summary: `Pratica avviata:\n ${contattoToSend.numeroPratica}`, detail: 'Messaggio inviato con successo!' });
        },
        error: () => {
          this.errore = true;
          this.inviato = false;
          this.messageService.add({ severity: 'error', summary: 'Errore', detail: 'Errore imprevisto, si prega di riprovare.' });
          this.markAllAsTouched();
        }
      });
      setTimeout(() => {
        this.inviato = false;
        this.errore = false;
      }, 10000);
    }
  }

  private markAllAsTouched() {
    Object.values(this.form.controls).forEach(control => control.markAsTouched());
  }
}
