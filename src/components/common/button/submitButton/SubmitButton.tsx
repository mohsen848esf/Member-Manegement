import React from 'react';
import SubButtonStyle from './SubmitButton.module.css';
interface SubmitButtonProps{
    buttonTitle: string,
    buttonType: "submit" | "reset",
}

const SubmitButton: React.FC<SubmitButtonProps> = ({buttonTitle , buttonType}) => {
    return <input className={SubButtonStyle.SubButton} type={buttonType} value={buttonTitle} />
};

export {SubmitButton}