import { Story, Meta } from '@storybook/angular/types-6-0';
import {UserImageComponent} from './user-image.component';

export default {
  title: 'Example/UserImageComponent',
  component: UserImageComponent,
} as Meta;

const Template: Story<UserImageComponent> = (args: UserImageComponent) => ({
  component: UserImageComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  imgUrl: 'https://randomuser.me/api/portraits/women/38.jpg',
};

