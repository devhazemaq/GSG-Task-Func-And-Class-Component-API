import React, {  } from 'react'
import { Navigate, Outlet,  } from 'react-router-dom';
import { PATHS } from '../../router/paths';

const AdminGurd = ({ role }) => {
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   if(role !== 'admin') {
  //     // navgate to home page
  //     console.log("navgate to home page");
  //     navigate(PATHS.HOME);
  //   }
  // },[navigate, role]);
  //return (<div>AdminGurd</div>)
  // طبعا بامكانا نستخد الهوك تبعت اليوز نفقيت او نستخدم بشكل مباشر اف بسيطة ونعمل شرط على الروول
  

  if (role === 'admin') return <Outlet />;
  return <Navigate to={PATHS.HOME} replace={true} />;

};

export default AdminGurd