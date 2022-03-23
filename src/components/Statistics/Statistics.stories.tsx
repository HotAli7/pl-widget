import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Statistics from './index';

export default {
    title: 'P&L Widget/Statistics',
    component: Statistics
} as ComponentMeta<typeof Statistics>;

const Template: ComponentStory<typeof Statistics> = () => <Statistics />;

export const StatisticsTemplate = Template.bind({});
StatisticsTemplate.args = {
    chartItems: [
        {
            text: "Sales",
            value: 129103.05,
            tooltipText: "This is tooltip"
        },
        {
            text: "Refunds",
            value: -3348.97,
            tooltipText: "This is tooltip"
        },
        {
            text: "Expenses",
            value: -70763.79,
            tooltipText: "This is tooltip"
        }
    ]
};