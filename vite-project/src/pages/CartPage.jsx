import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CartPage({ cart, setCart }) {
    const navigate = useNavigate();
    const [status, setStatus] = useState('');

    const handleQuantityChange = (index, delta) => {
        const updated = [...cart];
        updated[index].quantity += delta;
        if (updated[index].quantity < 1) updated[index].quantity = 1;
        setCart(updated);
    };

    const handleRemove = (index) => {
        const updated = [...cart];
        updated.splice(index, 1);
        setCart(updated);
    };

    const total = cart.reduce((sum, item) => sum + item.totalPrice * item.quantity, 0);

    const handleOrder = () => {
        if (cart.length === 0) return;

        setStatus("주문 접수 중...");
        setTimeout(() => setStatus("제조 중..."), 3000);
        setTimeout(() => {
            setStatus("제조 완료!");
            setCart([]);
        }, 8000);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center' }}>🛒 장바구니</h1>

            {status ? (
                <div style={{
                    backgroundColor: '#002b5b',
                    color: 'white',
                    padding: '20px',
                    marginTop: '20px',
                    textAlign: 'center',
                    borderRadius: '8px'
                }}>
                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{status}</p>
                    {status === "제조 완료!" && (
                        <button
                            onClick={() => navigate('/')}
                            style={buttonStyleAlt}
                        >
                            메인으로
                        </button>
                    )}
                </div>
            ) : cart.length === 0 ? (
                <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>장바구니가 비어 있어요 ☕</p>
            ) : (
                <>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {cart.map((item, idx) => (
                            <li key={idx} style={itemBoxStyle}>
                                <div>
                                    <p><strong>{item.name}</strong> ({item.options.temperature}, {item.options.size})</p>
                                    <p style={{ margin: '4px 0' }}>
                                        <small>얼음: {item.options.ice} | 샷: {item.options.shot} | 시럽: {item.options.syrup || "없음"} | 휘핑: {item.options.whippedCream ? "O" : "X"}</small>
                                    </p>
                                    <p>가격: {item.totalPrice.toLocaleString()}원</p>
                                    <div style={quantityStyle}>
                                        <button onClick={() => handleQuantityChange(idx, -1)} style={qtyBtn}>-</button>
                                        <span>{item.quantity}개</span>
                                        <button onClick={() => handleQuantityChange(idx, 1)} style={qtyBtn}>+</button>
                                        <button onClick={() => handleRemove(idx)} style={removeBtn}>삭제</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div style={{ textAlign: 'right', marginTop: '20px', fontWeight: 'bold', fontSize: '18px' }}>
                        총 합계: {total.toLocaleString()}원
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <button onClick={handleOrder} style={buttonStyle}>주문하기</button>
                    </div>
                </>
            )}
        </div>
    );
}

const itemBoxStyle = {
    backgroundColor: '#f8f8f8',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
};

const quantityStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px'
};

const qtyBtn = {
    padding: '4px 8px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff'
};

const removeBtn = {
    padding: '4px 8px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#ff6666',
    color: '#fff',
    marginLeft: 'auto'
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#002b5b',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
};

const buttonStyleAlt = {
    ...buttonStyle,
    backgroundColor: 'white',
    color: '#002b5b',
    border: '2px solid #002b5b'
};

export default CartPage;
