import { Story, Meta } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import {UserDetailsIconComponent} from './user-details-icon.component';

export default {
  title: 'Example/UserDetailsIconComponent',
  component: UserDetailsIconComponent,
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  iconClick: action('iconClick'),
};

const Template: Story<UserDetailsIconComponent> = (args: UserDetailsIconComponent) => ({
  component: UserDetailsIconComponent,
  props: {...args, iconClick: actionsData.iconClick},
});

export const Default = Template.bind({});
Default.args = {
  iconUrl: '',
  iconType: 'main',
};

