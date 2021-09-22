import React, { useState , useEffect } from 'react';
import { useHistory , useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from "yup";

import { Input } from '../../components/common/input/Input';
import { SubmitButton } from '../../components/common/button/submitButton/SubmitButton';
import { editUser } from '../../core/services/api/edit.api';
import { GetAllUsers } from '../../core/services/api/GetAllUsers.api';

import editStyle from './Edit.module.css'

const EditValidate = Yup.object().shape({
    fullname: Yup.string().required("فیلد نام و نام‌خانوادگی الزامی است").min(3,"نام و نام خانوادگی حداقل باید 3 حرف داشته باشد"),
    number: Yup.string().required("فیلد شماره همراه الزامی است").min(11, "شماره همراه باید 11 رقم داشته باشد").max(11, "شماره همراه باید 11 رقم داشته باشد"),
    email: Yup.string().required("فیلد ایمیل اجباری است").email("تایپ ایمیل شما غیرمجاز است"),
    age: Yup.number().required("فیلد سن اجباری است"),
  });
export interface EditProps {
    
}

export interface EditFromData {
    fullname: string,
    number: string,
    age: number | null,
    email: string,
}

const Edit: React.FC = () => {
    const [userData, setUserData] = useState<EditFromData | any>(null)
    const history = useHistory()
    const {userId}:{userId:string} = useParams()
    const getUserData = async() => {
        const data =await GetAllUsers();
        const FilterUserOfList = data.find((user:any)=> user.id === userId)
        console.log("userId",userId , "userData",FilterUserOfList)
        setUserData(FilterUserOfList);

    }
    useEffect(() => {
        getUserData()
    }, [])
    const onSubmit = async(value :EditFromData) => {
        const data = {
            fullname: value.fullname,
            number: value.number,
            age: value.age,
            password:'khashy@SH9598',
            email: value.email,
        }
        console.log("data", data)
        try {
            await editUser(data , userId);
            history.push('/showdata')
        } catch (err) {
            
        }
    }
    return (<Formik
        initialValues={userData}
        validationSchema={EditValidate}
        enableReinitialize={true}
        onSubmit={(value:any) => onSubmit(value)}>
        {({  errors, handleChange, touched }) => {
        return (
            <Form className={editStyle.form}>
                <div>
                 <img src={require("../../assets/image/logo 1.png").default} />
                </div>
                <div className={editStyle.formHolder}>
                   <div className={editStyle.edit}>ویرایش</div> 
                    <Input labelInput="نام و نام‌خانوادگی" inputType="text" inputName="fullname" inputPlaceHolder="نام و نام‌خانوادگی شما"/>
                    <Input labelInput="شماره موبایل" inputType="text" inputName="number" inputPlaceHolder=" شماره موبایل"/>
                    <Input labelInput=" سن" inputType="text" inputName="age" inputPlaceHolder="سن شما"/>
                    <Input labelInput=" ایمیل" inputType="text" inputName="email" inputPlaceHolder="ایمیل شما" />
                    <SubmitButton buttonTitle='ثبت اطلاعات' buttonType="submit"/>
                </div>
            </Form>
        )
    } }</Formik> );
}
 
export default Edit;