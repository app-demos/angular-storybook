import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import {UserComponent} from './user.component';

// import { UserImageComponent } from '../user-image/user-image.component';
// import { UserDetailsIconComponent } from '../user-details-icon/user-details-icon.component';
// import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserModule } from '../user.module';

export default {
  title: 'Example/UserComponent',
  component: UserComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with storybook
      // declarations: [UserDetailsComponent],
      imports: [UserModule]
    }),
  ],
} as Meta;

const Template: Story<UserComponent> = (args: UserComponent) => ({
  component: UserComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  userDetails: {
    name: {
      title: 'Mr.',
      first: 'Sumit',
      last: 'Arora'
    },
    picture: {
      large: 'https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png'
    }
  }
};

