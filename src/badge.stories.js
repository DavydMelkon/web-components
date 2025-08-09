import './badge.js';

export default {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
};

const Template = ({ label }) => {
  const badge = document.createElement('custom-badge');
  badge.setAttribute('label', label);
  return badge;
};

export const Default = Template.bind({});
Default.args = {
  label: 'New!',
};
