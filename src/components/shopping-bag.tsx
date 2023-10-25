import React from 'react';
import * as CLayer from 'commercelayer-react';
import '../styles/shopping.css';
const ShoppingBag = ({ open, close, lang }: any) => {
  return !lang ? null : (
    <div id="shopping-bag" className={open ? 'open' : ''}>
      <div className="shopping-bag-content">
        <div className="columns">
          <div className="column">
            <h4 className="has-text-weight-bold">{'Shopping Bag'}</h4>
          </div>
          <div className="column">
            <CLayer.ShoppingBagTotal />
          </div>
        </div>
        <div className="shopping-bag-unavailable-message has-text-danger">
          {'Out of stock'}
        </div>
        <CLayer.ShoppingBagItems
          ItemsContainerTag="table"
          itemTemplate={
            <table id="shopping-bag-table" className="table is-fullwidth">
              <tr>
                <td className="shopping-bag-col shopping-bag-col-image">
                  <CLayer.ShoppingBagItemImage />
                </td>
                <td className="shopping-bag-col shopping-bag-col-name">
                  <CLayer.ShoppingBagItemName />
                </td>
                <td className="shopping-bag-col shopping-bag-col-qty">
                  <CLayer.ShoppingBagItemQtyContainer />
                </td>
                <td className="shopping-bag-col shopping-bag-col-total">
                  <CLayer.ShoppingBagItemUnitAmount />
                </td>
                <td className="shopping-bag-col shopping-bag-col-remove">
                  <CLayer.ShoppingBagItemRemove />
                </td>
              </tr>
            </table>
          }
        />
        <div className="columns">
          <div className="column">
            <a
              className="button is-fullwidth"
              id="shopping-bag-close"
              onClick={close}
            >
              {'Continue Shopping'}
            </a>
          </div>
          <div className="column">
            <CLayer.Checkout className={'button is-fullwidth is-success'} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingBag;
