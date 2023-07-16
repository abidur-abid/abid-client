
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    //user tanstack query with axios
    const {data: isAdmin, loading: isAdminLoading} =  useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            // here route will be vhange according to server route
            const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            return res.data.admin;
        }


    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;