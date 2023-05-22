import { FormInterface } from '@features/feature-form';
import { EntitiesCommonControls } from '../../entities/entities-common/entities-common-controls';


export const LoginFormConfig: FormInterface = {
  groupName: 'loginForm',
  buttons: [{ label: 'התחבר', type: 'submit', className: 'btn' }],
  controls: {
    email: EntitiesCommonControls.Email(),
    password: EntitiesCommonControls.Password()
  },
};
