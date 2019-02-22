import React from 'react'

const Item = ({ item, onItemClick }) => {
  return (
    <li key={item.id} className="results-item">
      <a onClick={() => onItemClick(item.id)}>
        <div className="row-item">
        <div className="results-item-image">
          <img src={item.picture} alt={item.title} />
        </div>
        <div className="results-item-info">
          <div className="item-location">{item.location}</div>
          <div className="item-price">
            {item.price.amount}
            {item.free_shipping && <i className="item-shipping"> </i> }
          </div>
            <h2 className="item-title">{item.title}</h2>
        </div>
        </div>
      </a>
    </li>
  )
}

export default Item
