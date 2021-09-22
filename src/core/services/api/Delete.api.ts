import http from '../interceptor/Interceptor';
import Swal from 'sweetalert2'
const API_URL = process.env.REACT_APP_PUBLIC_PATH;


const DeleteUser = async (userID: any) => {
    try {
        const res = await http.delete(API_URL + "DeleteUser/"+ userID)  
        Swal.fire({
            position: 'center',
            icon: 'success',
            title:'حذف اکانت',
            text: 'اکانت  با موفقیت حذف شد',
            showConfirmButton: false,
            timer: 2500
          })      
    } catch (err) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title:'حذف اکانت',
            text: 'مشکلی در حذف اکانت پیش آمده است لطفا دوباره تلاش کنید',
            showConfirmButton: false,
            timer: 2500
          })
    }
}
 
export  {DeleteUser};