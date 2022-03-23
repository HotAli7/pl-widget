import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ShapeWrap from './index';

export default {
    title: 'P&L Widget/ShapeWrap',
    component: ShapeWrap,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ShapeWrap>;

const Template: ComponentStory<typeof ShapeWrap> = (args) => <ShapeWrap {...args} />;

export const ShapeWrapTemplate = Template.bind({});
ShapeWrapTemplate.args = {
    shapeItems: [
        {
            tooltipText: "Product charges",
            value: 40000
        },
        {
            tooltipText: "Shipping",
            value: 40000
        },
        {
            tooltipText: "Other",
            value: 40000
        },
        {
            tooltipText: "Refunded expenses",
            value: 30000
        }
    ],
    total: 120000,
    sourceY: 150,
    targetY: 0,
    width: 200,
    height: 230
};
