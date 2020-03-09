import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection.styles.scss';


const CollectionPreview = ({title,items,id}) => (

    <div className="collection-preview">
        <h1 className="title"> {title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,idx) => idx<4).map(({id, ...otherItemsProps}) => {
                    return (<CollectionItem key={id} {...otherItemsProps} />);
                })
            }
        </div>

    </div>
)

export default CollectionPreview;