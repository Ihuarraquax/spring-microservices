import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';

export default function OrderHistoryScreen(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const {orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
    return () => {
    };
  }, [dispatch]);
  return (
    <div>
      <h1>Historia zamówień</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cena</th>
            <th>ilość produktów</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {orders?.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.totalPrice.toFixed(2)}</td>
              <td>{order.products.length}</td>
              <td>
                <button
                  type="button"
                  className="small"
                  disabled
                  onClick={() => {
                    props.history.push(`/order/${order.id}`);
                  }}
                >
                  Szczegóły
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}