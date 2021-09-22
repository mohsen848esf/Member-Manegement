import http from '../interceptor/Interceptor';
import Swal from 'sweetalert2'
const API_URL = process.env.REACT_APP_PUBLIC_PATH;

interface editProps{
    
        
        fullname: string,
        number: string,
        age: number | null,
        password:string,
        email: string,
        
}

const editUser= async (value:editProps , userId:string) => {
try {
        const res = await http.put(API_URL +'UpdateUser/'+ userId , value)
        Swal.fire({
                position: 'center',
                icon: 'success',
                title:'ویرایش اکانت',
                text: 'اکانت  با موفقیت ویرایش شد',
                showConfirmButton: false,
                timer: 2500
              })
        return res.data
    } catch (err) {
        Swal.fire({
                position: 'center',
                icon: 'error',
                title:'ویرایش اکانت',
                text: 'مشکلی در ویرایش اکانت پیش آمده است لطفا دوباره تلاش کنید',
                showConfirmButton: false,
                timer: 2500
              })
    return null
    
}
}
export {editUser}