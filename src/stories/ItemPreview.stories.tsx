import React from 'react';
import { Story, Meta } from '@storybook/react'
import { ItemPreview, ItemPreviewProps } from './ItemPreview'

export default {
    title: 'ItemPreview',
    component: ItemPreview,
} as Meta

const Template: Story<ItemPreviewProps> = (args: ItemPreviewProps) => <ItemPreview {...args} />

export const ItemPreviewTemplate = Template.bind({})
ItemPreviewTemplate.args = {};