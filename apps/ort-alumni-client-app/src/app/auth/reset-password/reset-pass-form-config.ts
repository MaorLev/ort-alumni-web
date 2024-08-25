import { FormInterface } from '@features/feature-form';
import { EntitiesCommonControls } from '../../entities/entities-common/entities-common-controls';


export const ResetPasswordFormConfig: FormInterface = {
  groupName: 'resetPasswordFormConfig',
  buttons: [{ label: 'התחבר', type: 'submit', className: 'btn' }],
  controls: {
    token: EntitiesCommonControls.Token(),
    password: EntitiesCommonControls.Password()
  },
};
