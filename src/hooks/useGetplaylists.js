import { useQuery } from '@tanstack/react-query';
// import { useQuery } from 'react-query';

import axios from 'src/utils/axios';

export function useGetPlaylists(enabled = true) {
    // return useQuery(
    //     {
    //         queryKey: ['songs'],
    //         queryFn: () => axios.get('/music').then(({ data }) => data),
    //     },
    //     {
    //         enabled: false,
    //         onError: (error) => {
    //             console.log(error);
    //         },
    //         initialData: []
    //         // select: response => response.data,
    //     }
    // )
    // return useQuery(['songs'], () => axios.get('/music'),
    //     {
    //         enabled: true,
    //         initialData: { data: [] },
    //         select: value => value.data,
    //         onError: (error) => {
    //             console.log(error);
    //         },
    //     }
    // )
    return useQuery(
        {
            queryKey: ['playlists'],
            queryFn: () => axios.get('/playlists').then(({ data }) => data),
            enabled: true,
            initialData: [],
            onError: (error) => {
                console.log(error);
            },
        }
    )
}