import React from 'react';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={css.notFound}>
            <h1>404</h1>
            <h3>Not Found</h3>
        </div>
    );
};

export {NotFoundPage};