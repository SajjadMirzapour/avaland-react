import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "src/utils/axios";
import { toast } from 'react-toastify';

export function useLoginMutation() {
    const naviage = useNavigate()
    return useMutation(
        {
            mutationKey: 'login',
            networkMode: 'always',
            mutationFn: (data) => {
                return axios.post('/signIn', JSON.stringify(data))
            },
            onSuccess: (response, data) => {
                toast.success(`${data.username} عزیز خوش آمدید.`)
                naviage('/')
            },
            onError: error => {
                toast.error(error?.response?.data?.message)
                console.log('error', error?.response?.data?.message)
            }
        }
    )
}