import React from "react";

function Product({label, image, title, price}) {
    return (
        <article className="product">
            <span>{label}</span>
            <img src={image} alt={title} />
            <p className="product-name">
                {title}
            </p>
            <h4 className="product-price">
                {(price % 1 !== 0) ?
                    new Intl.NumberFormat('en-EN', {
                    style: 'currency',
                    currency: 'EUR',
                    maximumFractionDigits: 2}).format(price).replace('.', ',').toString()
                    :
                    new Intl.NumberFormat('en-EN', {
                    style: 'currency',
                    currency: 'EUR',
                    maximumFractionDigits: 0}).format(price).toString().concat(",-")}
                {/*{new Intl.NumberFormat('en-EN', {*/}
                {/*    style: 'currency',*/}
                {/*    currency: 'EUR',*/}
                {/*    maximumFractionDigits: 0}).format(price).toString().concat(",-")*/}
                {/*}*/}
            </h4>
        </article>
    );
}

export default Product;