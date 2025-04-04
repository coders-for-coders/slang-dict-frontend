import React, { useState, FormEvent } from 'react';

interface GaaliFormProps {
    onSubmit: (data: any) => void;
}

const GaaliForm: React.FC<GaaliFormProps> = ({ onSubmit }) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
};

export default GaaliForm;