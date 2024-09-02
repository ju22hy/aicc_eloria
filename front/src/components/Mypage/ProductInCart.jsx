import React, { useEffect, useState } from 'react';
import './productincart.css';
import { LuPlus, LuMinus } from 'react-icons/lu';

const ProductInCart = () => {
  const [products, setProducts] = useState([]);
  const [allChecked, setAllChecked] = useState(true);

  useEffect(() => {
    // 사용자별 장바구니 데이터를 서버에서 가져오기
    fetch('http://localhost:8080/api/get-basket', {
      method: 'GET',
      credentials: 'include', // 쿠키 포함 요청
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data); // 데이터를 콘솔에 출력하여 확인
        if (Array.isArray(data)) {
          // 각 제품에 기본 수량(quantity)을 설정
          const updatedProducts = data.map((product) => ({
            ...product,
            quantity: 1, // 기본 수량을 1로 설정
            checked: true, // 기본 체크 상태
          }));
          setProducts(updatedProducts); // 서버에서 가져온 데이터가 배열이면 설정
          setAllChecked(updatedProducts.every((product) => product.checked));
        } else {
          setProducts([]); // 데이터가 배열이 아닌 경우 빈 배열로 설정
        }
      })
      .catch((error) => {
        console.error('Error fetching basket data:', error);
        setProducts([]); // 오류가 발생한 경우에도 안전하게 빈 배열로 설정
      });
  }, []);

  const handleCheckboxChange = (id) => {
    const updatedProducts = products.map((product) =>
      product.productid === id
        ? { ...product, checked: !product.checked }
        : product
    );
    setProducts(updatedProducts);
    setAllChecked(updatedProducts.every((product) => product.checked));
  };

  const handleAllCheckboxChange = () => {
    const newAllCheckedStatus = !allChecked;
    const updatedProducts = products.map((product) => ({
      ...product,
      checked: newAllCheckedStatus,
    }));
    setProducts(updatedProducts);
    setAllChecked(newAllCheckedStatus);
  };

  const handleIncreaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.productid === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.productid === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      const priceString = product?.productprice || '0';
      const price = parseFloat(priceString.replace(/,/g, ''));
      return total + (product.checked ? price * product.quantity : 0);
    }, 0);
  };

  return (
    <div className="cart-container">
      <div className="cart-top">
        <table className="cart-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={handleAllCheckboxChange}
                />
              </th>
              <th>상품명</th>
              <th>수량 변경</th>
              <th>결제금액</th>
              <th>선택</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productid}>
                <td className="checkbox-td">
                  <input
                    type="checkbox"
                    checked={product.checked}
                    onChange={() => handleCheckboxChange(product.productid)}
                  />
                </td>
                <td className="product-info">
                  <img
                    src={`http://localhost:8080/img/${product.productimage}`}
                    alt={product.productname}
                  />
                  <span>{product.productname}</span>
                </td>
                <td>
                  <div className="quantity-td">
                    <input
                      type="number"
                      value={product.quantity}
                      min="1"
                      readOnly
                    />
                    <LuPlus
                      className="plus-icon"
                      onClick={() => handleIncreaseQuantity(product.productid)}
                    />
                    <LuMinus
                      className="minus-icon"
                      onClick={() => handleDecreaseQuantity(product.productid)}
                    />
                  </div>
                </td>
                <td className="price-td">
                  KRW {product.productprice?.toLocaleString()}
                </td>
                <td>
                  <div className="option-td">
                    <button
                      className="cart-order"
                      onClick={() => {
                        console.log(`${product.productname} 주문`); // 기능 현재는 없음
                      }}
                    >
                      주문하기
                    </button>
                    <button
                      className="cart-delete"
                      onClick={() => {
                        console.log(`${product.productname} 삭제`); // 기능 현재는 없음
                      }}
                    >
                      삭제하기
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-total">
          <div className="cart-caution">
            <p>* 장바구니에 담긴 상품은 최대 90일간 유지됩니다.</p>
            <p>* ELORIA의 회원이라면, 무조건 배송비 무료입니다.</p>
          </div>
          <div className="c-total-price">
            <p className="c-text">TOTAL:</p>
            <p className="c-number">
              KRW {calculateTotalPrice().toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="cart-buttons">
        <button className="delete-selected">선택상품 삭제</button>
        <div className="order-buttons">
          <button className="order-selected">선택상품 주문</button>
          <button className="order-all">전체상품 주문</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
