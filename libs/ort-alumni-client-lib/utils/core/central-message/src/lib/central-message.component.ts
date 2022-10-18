import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractCentralMessageService } from './state/abstract-central-message-service';
import { Message } from './state/central-message.types';

@Component({
  selector: 'ort-central-message',
  templateUrl: './central-message.component.html',
  styleUrls: ['./central-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CentralMessageComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(private centralMessageService: AbstractCentralMessageService) {}

  ngOnInit(): void {
    this.messages$ = this.centralMessageService.messages$;
  }

  remove(message: Message): void {
    this.centralMessageService.removeMessage(message);
  }
}
