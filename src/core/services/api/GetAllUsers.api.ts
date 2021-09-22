import http from '../interceptor/Interceptor';
import Swal from 'sweetalert2'
const API_URL = process.env.REACT_APP_PUBLIC_PATH;

const GetAllUsers = async() => {
    try {
        const res = await http.get(API_URL + "GetAllUsers")
        return res.data    
    } catch (err) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title:' دریافت اطلاعات',
            text: 'مشکلی در دریافت اطلاعات پیش آمده است',
            showConfirmButton: false,
            timer: 2500
          })
        return null
        
    }
}
 
export  {GetAllUsers};