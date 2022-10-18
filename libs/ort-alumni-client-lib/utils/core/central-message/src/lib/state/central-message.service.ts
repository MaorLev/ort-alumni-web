import { Inject, Injectable, Optional } from '@angular/core';
import {
  Message,
  MESSAGE_LOGGERS,
  MessageLogger,
} from './central-message.types';
import { CentralMessageConfigurationService } from './central-message-configuration.service';
import { AbstractCentralMessageService } from './abstract-central-message-service';

@Injectable({
  providedIn: 'root',
})
export class CentralMessageService extends AbstractCentralMessageService {
  constructor(
    @Inject(MESSAGE_LOGGERS) @Optional() private loggers: MessageLogger[],
    private messageConfig: CentralMessageConfigurationService
  ) {
    super();
  }

  public setMessage(message: Message) {
    this._messageQueue.push(message);
    this._messages.next([...this._messageQueue]);

    if (this.messageConfig.configuration.enableLoggers) {
      if (this.loggers && this.loggers.length > 0) {
        this.loggers.forEach((logger) => {
          logger.logMessage(message);
        });
      }
    }
  }
  public removeMessage(message: Message): void {
    const index = this._messageQueue.indexOf(message);
    this._messageQueue.splice(index, 1);
    this._messages.next([...this._messageQueue]);
  }
}
