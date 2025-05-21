import React from "react";

function MenuItem({ item, onClick }) {
    return (
        <div
            style={{
                width: '180px',
                cursor: 'pointer',
                marginBottom: '20px',
                textAlign: 'center'
            }}
            onClick={onClick}
        >
            <img src={item.image} alt={item.name}
                style={{
                    width: "100%",
                    height: '220px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                }}
            />
            <div style={{ marginTop: '10px' }}>
                <p style={{ margin: '4px 0', fontSize: '14px', fontWeight: '600' }}>{item.name}</p>
                <p style={{ margin: '0', fontSize: '13px', color: '#555' }}>{item.basePrice.toLocaleString()}원</p>
            </div>
        </div>
    );
}

export default MenuItem;
