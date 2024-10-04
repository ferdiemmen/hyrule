import { Component, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RESPONSE } from '../../../express.tokens';
import { Response } from 'express';

@Component({
  selector: 'app-not-found-error',
  standalone: true,
  imports: [],
  templateUrl: './not-found-error.component.html',
  styleUrl: './not-found-error.component.scss'
})
export class HeroNotFoundErrorComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Optional() @Inject(RESPONSE) private response: Response) {

    if (this.response) {
      this.document.body.classList.add('not-found');
    }
  }
}
