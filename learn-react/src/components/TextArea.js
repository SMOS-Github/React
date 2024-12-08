import React from 'react';

export default function TextArea() {
    return (
        <>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                <label htmlFor="floatingTextarea2">Comments</label>
            </div>
        </>
    );
}