import  { FC , useState } from "react"
import { Edit, Trash2  } from "react-feather"
import { useHistory } from "react-router-dom"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import TableListStyle from './TableList.module.css'

interface IPropTypes{
    cell: {
        row: {
            values: any;
            original: any;
        }
    }
  handelDelete:(val:string)=> void,
}
interface ModalCustomProps{
    modalOpen: boolean,
  setModalOpen: (val: boolean) => void,
  handelDelete: (val: string) => void,
  userIdForDelete:string,
}

const Option: FC<IPropTypes> = ({ cell: { row: { original, values } }, handelDelete }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  const history = useHistory()
    return (<>
        <div className="option d-flex justify-content-between">
            <span className="mx-4 " onClick={() => {
                history.push('/edit/' +original.id)
            }}>
                <Edit className={TableListStyle.edit} size={20}/>
            </span>
            <span className="mx-4 cursor-pointer" onClick={() => setIsOpen(true)}>
                <Trash2 className="text-danger" size={20}/>
            </span>
        </div>
        {isOpen && <ModalCustom modalOpen={isOpen} userIdForDelete={original.id} handelDelete={handelDelete}  setModalOpen={setIsOpen}/>}
        </>
    )
}
const ModalCustom: FC<ModalCustomProps> = ({modalOpen , setModalOpen , userIdForDelete , handelDelete}) => {
    console.log(modalOpen)
    const toggle = () => {
        setModalOpen(!modalOpen)
  };
  const handelDeleteUserFromList = () => {
    setModalOpen(false)
    handelDelete(userIdForDelete)
  }
    
    return (
    <Modal isOpen={modalOpen} toggle={toggle} className="border-none" centered={true} dir="rtl">
            <ModalHeader className={TableListStyle.modal}><span>
        </span><h5>حذف ردیف</h5></ModalHeader>
            <ModalBody className="border-none">
                آیا از حذف این ردیف مطمين هستید؟
            </ModalBody>
            <ModalFooter className={TableListStyle.modal}>
                <Button className="btn btn-danger mx-2 px-3 text-center " onClick={() =>handelDeleteUserFromList()}> حذف</Button>
            </ModalFooter>
      </Modal>
    )
}

export const columns = [
  {
    Header: 'نام و نام‌خانوادگی',
    accessor: 'fullname',
    width: 180,
    disableFilters: true,
  },
  {
    Header: 'شماره موبایل',
    accessor: 'number',
    width: 180,
    disableFilters: true,
  },
  {
    Header: 'ایمیل',
    accessor: 'email',
    width: 180,
    disableFilters: true,
  },
  {
    Header: 'تاریخ ایجاد',
    accessor: 'createDate',
    disableFilters: true,
  },
  {
    Header: ' ',
      accessor: 'option',
    Cell: Option,
      getProps: (props:any) => ({handelDelete: props.handelDelete}),
    disableFilters: true,
    width: 150,
  },
]

