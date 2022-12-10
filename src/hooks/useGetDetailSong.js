import { useQuery } from '@tanstack/react-query';
import axios from 'src/utils/axios'

export function UseGetDetailSong(id, enabled = true) {
    return useQuery({
        queryKey: ['detailSong'],
        enabled,
        networkMode: 'always',
        queryFn: () =>
            axios.get('/music', { params: { id } }).then(({ data }) => data)
        ,
        onSuccess: () => {
            // console.log('succc');
        },
        onError: () => {
            console.log('huuraa');
        }
    })
};