import { Story, Meta } from '@storybook/angular/types-6-0';
import {UserDetailsComponent} from './user-details.component';

export default {
  title: 'Example/UserDetailsComponent',
  component: UserDetailsComponent,
} as Meta;

const Template: Story<UserDetailsComponent> = (args: UserDetailsComponent) => ({
  component: UserDetailsComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Mr.',
  first: 'Sumit',
  last: 'Arora'
};

