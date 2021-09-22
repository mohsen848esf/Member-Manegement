import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Input } from '../../components/common/input/Input';
import { SubmitButton } from '../../components/common/button/submitButton/SubmitButton';
import { signUpUser } from '../../core/services/api/SignUp.api';

import SignUpStyle from './SignUp.module.css'

const SignUpValidate = Yup.object().shape({
    fullName: Yup.string().required("فیلد نام و نام‌خانوادگی الزامی است").min(3,"نام و نام خانوادگی حداقل باید 3 حرف داشته باشد"),
    /* password: Yup.string().required("فیلد رمز الزامی است").min(8,"رمز باید حداقل 8 کاراکتر باشد "), */
    phoneNumber: Yup.string().required("فیلد شماره همراه الزامی است").min(11, "شماره همراه باید 11 رقم داشته باشد").max(11, "شماره همراه باید 11 رقم داشته باشد"),
    email: Yup.string().required("فیلد ایمیل اجباری است").email("تایپ ایمیل شما غیرمجاز است"),
    age: Yup.number().required("فیلد سن اجباری است"),
  });
export interface SignUpProps {
    
}
export interface SignUpFromData {
    fullName: string,
   /*  password: string, */
    phoneNumber: string,
    age: number | null,
    email: string,
}

const SignUp: React.FC = () => {
    const history = useHistory()

    const onSubmit = async(value :SignUpFromData) => {
        const data = {
            fullname: value.fullName,
            number: value.phoneNumber,
            age: value.age,
            password: 'khashy@SH9598',
            email: value.email,
        }
        try {
            await signUpUser(data);
            history.push('/showdata')
        } catch (err) {
            
        }
    }
    return (<Formik
        initialValues={{ fullName: "", phoneNumber:"" , age: null , email:""}}
        validationSchema={SignUpValidate}
        onSubmit={(value) => onSubmit(value)}>
        {({  errors, handleChange, touched }) => {
        return (
            <Form>
                <div className={SignUpStyle.formHolder}>
                    <div className={SignUpStyle.image}>
                        <img src={require("../../assets/image/logo 1.png").default} />
                    </div>
                    <div className={SignUpStyle.head}>
                        <div className={SignUpStyle.title}>فرم زیر را پر کنید</div>
                        <div className={SignUpStyle.inputs}>
                            <Input labelInput="نام و نام‌خانوادگی" inputType="text" inputName="fullName" inputPlaceHolder="نام و نام‌خانوادگی شما"/>
                            <Input labelInput="شماره موبایل" inputType="text" inputName="phoneNumber" inputPlaceHolder=" شماره موبایل"/>
                            <Input labelInput=" سن" inputType="text" inputName="age" inputPlaceHolder="سن شما"/>
                            <Input labelInput=" ایمیل" inputType="text" inputName="email" inputPlaceHolder="ایمیل شما" />
                            <SubmitButton  buttonTitle='ساخت اکانت' buttonType="submit"/>
                        </div>
                    </div>
                </div>
            </Form>
        )
    } }</Formik> );
}
 
export default SignUp;