import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChartCard from './index';

export default {
  title: 'P&L Widget/ChartCard',
  component: ChartCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ChartCard>;

const Template: ComponentStory<typeof ChartCard> = (args) => <ChartCard {...args} />;

export const Income = Template.bind({});
Income.args = {
  chartItem: {
    text: 'Sales',
    value: 123,
    tooltipText: 'This is Tooltip'
  }
};

export const Expense = Template.bind({});
Expense.args = {
  chartItem: {
    text: 'Expenses',
    value: -123,
    tooltipText: 'This is Tooltip'
  }
};
