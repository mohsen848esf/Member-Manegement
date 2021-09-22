import React, {useState,useEffect, useCallback }from 'react';
import { PlusCircle } from 'react-feather';
import { useHistory  } from 'react-router-dom';
import Swal from 'sweetalert2'
import Table from '../../components/table/Table';
import { GetAllUsers } from '../../core/services/api/GetAllUsers.api';
import { DeleteUser } from '../../core/services/api/Delete.api';
import ScaleLoader from "react-spinners/ScaleLoader";
import ShowDataStyle from './ShowData.module.css'
import { css } from "@emotion/react";
export interface ShowDataProps {
    
}
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
const ShowData: React.FC<ShowDataProps> = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [receiveData, setReceiveData] = useState<boolean>(false)
    const [fakeData, setFakeData] = useState<any>([])
    const history = useHistory()
    const getUsersList = useCallback(async () => {
        setLoading(true)
        try {
            const AllData = await GetAllUsers();
            setFakeData(AllData);
        } catch (error) {
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, [setFakeData, setReceiveData])   
    useEffect(() => {
        
        getUsersList()
        // console.log("All" ,fakeData)
    },[getUsersList,receiveData])
    /* useEffect(() => {
        getUsersList()
        console.log("receiveData" )
    },[receiveData]) */
    const handelDeleteUserFromList = async(userId:string) => {
        const filterData = fakeData.filter((item: any) => item.id !== userId)
        setFakeData(filterData);
        await DeleteUser(userId);

    }

    return (<><div className="d-flex justify-content-center border-2 mt-5">
        <div className="mt-5">
            <div className="d-flex justify-content-between">
                <div><h6>داده ها</h6></div>
                <div>
                    <button className={`btn btn-outline-danger ${ShowDataStyle['server']}`} onClick={()=>setReceiveData(true)}>دریافت اطلاعات از سرور</button>
                    <button className="btn btn-danger mx-2 px-3 " onClick={()=> history.push('/signup') } > <PlusCircle size={20} className="mx-2" />ساخت اکانت جدید</button>
                </div>
            </div>
            <Table fakeData={fakeData} handelDelete={ handelDeleteUserFromList}/>
            <div className="sweet-loading">
            {/* <ScaleLoader color={"#C79C69"} loading={loading} css={override} width={500} height={10}/> */}
        </div>
        </div>
    </div>
    </>
    );
}
 
export default ShowData;