import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegisterationComponent } from './student-registeration.component';
import { RouterModule } from '@angular/router';
import { FeatureFormModule } from '@features/feature-form';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
import { CentralMessageModule, Message, MessageLogger, MESSAGE_LOGGERS } from '@utils/util/core/central-message';
class MessageConsoleLogger implements MessageLogger {
  logMessage(message: Message): void {
    console.log('My Custom Logger Maorr', message);
  }
}
class MessageServerLogger implements MessageLogger {
  logMessage(message: Message): void {
    console.log('Send to server', message);
  }
}

@NgModule({
  declarations: [StudentRegisterationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StudentRegisterationComponent },
    ]),
    FeatureExpansionPanelModule,
    FeatureFormModule,
    CentralMessageModule,
  ],
  exports: [StudentRegisterationComponent],
  providers: [
    // {
    //   provide: AbstractCentralMessageService,
    //   useClass: CustomMessageService
    // },
    {
      provide: MESSAGE_LOGGERS,
      useClass: MessageConsoleLogger,
      multi: true,
    },
    {
      provide: MESSAGE_LOGGERS,
      useClass: MessageServerLogger,
      multi: true,
    },
  ],
})
export class StudentRegisterationModule {}
