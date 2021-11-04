import React from "react";
import PropTypes from "prop-types";
import './Item.css';

const Item = ({ item, children}) => (
    <h2>{item.name}</h2>
);

Item.propTypes = {
    item: PropTypes.object.isRequired
};

export default Item;