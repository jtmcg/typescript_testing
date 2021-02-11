import React from 'react'
import User from '../lib/user';
import './itemPreview.css'

export interface ItemPreviewProps {
    image: string;
    itemName: string;
    itemDescription: string;
    user: User;
}

export const ItemPreview: React.FC<ItemPreviewProps> = ({ image, itemName, itemDescription, user }) => (
    <div className={"itemPreview__container"}>
        <div className={"itemPreview__image-container"}>
            <img className={"itemPreview__image"} src={image} alt={"item preview"} />
            <div className={"itemPreview__image-details-container"}>
                <h2>{itemName}</h2>
                <p>{itemDescription}</p>
            </div>
        </div>
        <div className={"itemPreview__details-container"}>
            <div className={"itemPreview__details-user"}>
                <img className={"itemPreview__details-user_image"} src={user.getImageURL('thumbnail')} alt={'user thumb'} />
                <p>{user.name}</p>
            </div>
            <div className={"itemPreview__details-location"}>
                <p>{user.generalLocation}</p>
            </div>
        </div>
    </div>
)