
import http from '../interceptor/Interceptor';
import { setItem } from '../storage/storage';
import Swal from 'sweetalert2'
const API_URL = process.env.REACT_APP_PUBLIC_PATH;

interface signUpUserProps{
    fullname: string,
    password: string,
    number: string,
    age: number | null,
    email: string,}
const signUpUser = async (value: signUpUserProps) => {
    try {
        const res:any = await http.post(API_URL + 'Register/register', value)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title:'ساخت اکانت',
           text: 'اکانت  با موفقیت ساخته شد',
            showConfirmButton: false,
            timer: 2500
          })
        return res.data
    } catch (err) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title:'ساخت اکانت',
            text: 'مشکلی در ساخت اکانت پیش آمده است لطفا دوباره تلاش کنید',
            showConfirmButton: false,
            timer: 2500
          })
        return null
    }
    
}
export {signUpUser}