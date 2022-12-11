import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import AdminLecture from '../admin-lecture/index';
import AdminHOS from '../admin-head-subject/index';
import AdminTraining from '../admin-trainning/index';
import image1 from '../../../../../assets/images/svg-1.png'
import Header from '../../Header';




const Admin = () => {
    const [adminIndex , setAdminIndex] = useState(1)
    const userName = localStorage.getItem("userName")
    const objAdmin = {
        1 : <AdminLecture />,
        2 : <AdminHOS />,
        3 : <AdminTraining />
    }
    const handleClick = (idx) => {
        setAdminIndex(idx)
    }
    const navigation = useNavigate()
    return (
        <div>
            <div style={{ height: 60, background: '#0a8cf1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' , marginBottom : 40 }}>
                <div style={{ display: 'flex', width: '90', height: "80%" }}>
                <img style={{ marginLeft: 20, marginRight: 20 }} src={image1} height="40" alt=''/>
                <div style={{display : 'flex' , alignItems : 'center' , fontSize : 22 , cursor : 'pointer'}}>
                        <div className="admin-header" onClick={() => handleClick(1)} style={{color: adminIndex == 1 ? 'yellow' : 'black'}}>
                            Giảng viên
                        </div>
                        <div className="admin-header" onClick={() => handleClick(2)} style={{color: adminIndex == 2 ? 'yellow' : 'black' , marginLeft: 20, marginRight: 20}} >
                            Chủ nhiệm bộ môn
                        </div>
                        <div className="admin-header" onClick={() => handleClick(3)} style={{color: adminIndex == 3 ? 'yellow' : 'black'}}>
                            Trưởng ban đào tạo
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', color: 'black', fontSize: 24, fontWeight: 500 }}>
                    <div>
                        {userName}
                    </div>
                    <div style={{marginLeft: 20, marginRight: 20}}>
                        <UserOutlined height='60px' />
                    </div>
                    <div className="admin-header" onClick={() => {
                        localStorage.clear()
                        navigation('/login')
                    }} style={{marginRight : 20 , cursor : 'pointer'}}>
                        LogOut
                    </div>
                </div>
            </div>

            <div>
                {objAdmin[adminIndex]}
            </div>
        </div>
    );
};

export default Admin;