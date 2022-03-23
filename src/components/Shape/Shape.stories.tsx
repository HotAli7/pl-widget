import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ShapeItem from './index';

export default {
    title: 'P&L Widget/ShapeItem',
    component: ShapeItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ShapeItem>;

const Template: ComponentStory<typeof ShapeItem> = (args) => <ShapeItem {...args} />;

export const Shape = Template.bind({});
Shape.args = {
    shapeItems: [
        {
            value: 300,
            tooltipText: 'This is Tooltip'
        }
    ],
    total: 500,
    index: 0,
    sourceY: 150,
    targetY: 0
};
