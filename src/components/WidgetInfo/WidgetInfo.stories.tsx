import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WidgetInfo from './index';

export default {
    title: 'P&L Widget/WidgetInfo',
    component: WidgetInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WidgetInfo>;

const Template: ComponentStory<typeof WidgetInfo> = (args) => <WidgetInfo {...args} />;

export const Income = Template.bind({});
Income.args = {
    widgetItems: [
        {
            text: "Product charges",
            value: 126151.07,
            subBalance: [],
            tooltipText: "This is tooltip Text"
        },
        {
            text: "Shipping",
            value: 2251.87,
            subBalance: [],
            tooltipText: "This is tooltip Text"
        },
        {
            text: "Other",
            value: 700.11,
            subBalance: [
                {
                    text: "Other",
                    value: 500,
                    subBalance: [],
                    tooltipText: "This is tooltip Text"
                },
                {
                    text: "Other",
                    value: 200.11,
                    subBalance: [],
                    tooltipText: "This is tooltip Text"
                }
            ],
            tooltipText: "This is tooltip Text"
        },
        {
            text: "Refunded expenses",
            value: 541.85,
            subBalance: [],
            tooltipText: "This is tooltip Text"
        }
    ],
    total: 321
};

export const Expense = Template.bind({});
Expense.args = {
    widgetItems: [
        {
            text: "Refunded sales",
            value: -3890.82,
            subBalance: [],
            tooltipText: "This is tooltip Text"
        },
        {
            text: "Promo rebates",
            value: -1808.24,
            subBalance: [],
            tooltipText: "This is tooltip Text"
        },
        {
            text: "FBA fees",
            value: -1315.51,
            subBalance: [],
            tooltipText: "This is tooltip Text"
        },
        {
            text: "Cost of Advertising",
            value: -10095.06,
            subBalance: [],
            tooltipText: "This is tooltip Text"
        },
        {
            text: "Amazon fees",
            value: -57534.55,
            subBalance: [],
            tooltipText: "This is tooltip Text"
        },
        {
            text: "Other",
            value: -10.43,
            subBalance: [],
            tooltipText: "This is tooltip Text"
        }
    ],
    total: -321
};
