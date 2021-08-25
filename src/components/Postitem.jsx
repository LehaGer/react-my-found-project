import React from 'react';

const Postitem = () => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>1. Javascript</strong>
                <div>
                    JS - ЯП
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default Postitem;