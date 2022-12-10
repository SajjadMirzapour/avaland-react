import { useMutation } from "@tanstack/react-query";
import axios from "src/utils/axios";
import { toast } from 'react-toastify';

export default function UseUploadMutation() {
    return (
        useMutation(
            // {
            //     mutationsKey: 'upload',
            //     networkMode: 'always',
            //     mutationFn: (data, uploadPercent) => {

            //         const config = {
            //             headers: {
            //                 "Content-Type": "multipart/form-data",
            //             },
            //             onUploadProgress: (progressEvent, uploadPercent) =>
            //             (uploadPercent = Math.round(
            //                 (progressEvent.loaded / progressEvent.total) * 100
            //             )),
            //         };
            //         console.log('uploadPercent', uploadPercent);
            //         return axios.post('music/upload', data, config)

            //     },
            //     onSuccess: () => {
            //         toast.success('hi')
            //     },
            //     onError: () => {
            //         toast.error('bye')
            //     }

            // }
        )
    )
}