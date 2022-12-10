import { useQuery } from '@tanstack/react-query';
import axios from 'src/utils/axios';

export function useGetFavoriteMusic(enabled = true) {
    return useQuery(
        {
            queryKey: ['favoriteMusic'],
            networkMode: 'always',
            queryFn: () => axios.get('/music/favorite').then(({ data }) => data),
            enabled,
            initialData: [],
            onError: (error) => {
                console.log(error);
            },
        }
    )
}