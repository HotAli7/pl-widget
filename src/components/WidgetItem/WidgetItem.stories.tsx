import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WidgetItem from './index';

export default {
    title: 'P&L Widget/WidgetItem',
    component: WidgetItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WidgetItem>;

const Template: ComponentStory<typeof WidgetItem> = (args) => <WidgetItem {...args} />;

export const Income = Template.bind({});
Income.args = {
    widgetItem: {
        text: 'Sales',
        value: 123,
        tooltipText: "This is tooltip Text"
    },
    height: 100
};

export const Expense = Template.bind({});
Expense.args = {
    widgetItem: {
        text: 'Sales',
        value: -123,
        tooltipText: "This is tooltip Text"
    },
    height: 100
};
