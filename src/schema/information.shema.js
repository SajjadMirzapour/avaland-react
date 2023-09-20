import * as yup from "yup";
import msg from "./messages";

const terms = {
    SINGER_NAME: 'نام خواننده',
    SONG_NAME: 'نام آهنگ',
    ALBUM_NAME: 'نام آلبوم',
    DURATION: 'مدت زمان آهنگ',
    LYRICS: 'متن آهنگ',
    IMAGE: "عکس آهنگ"
}

const schema = yup
    .object({
        singerName: yup
            .string()
            .required(msg.required(terms.SINGER_NAME))
            .min(2, msg.min(terms.SINGER_NAME, 2))
            .max(15, msg.max(terms.SINGER_NAME, 15)),
        songName: yup
            .string()
            .required(msg.required(terms.SONG_NAME))
            .min(2, msg.min(terms.SONG_NAME, 2))
            .max(15, msg.max(terms.SONG_NAME, 15)),
        albumName: yup
            .string()
            .required(msg.required(terms.ALBUM_NAME))
            .min(3, msg.min(terms.ALBUM_NAME, 3))
            .max(15, msg.max(terms.ALBUM_NAME, 15)),
        songDuration: yup
            .string()
            .required(msg.required(terms.DURATION))
            .min(2, msg.min(terms.DURATION, 2))
            .max(15, msg.max(terms.DURATION, 15)),
        songLyrics: yup
            .string()
            .required(msg.required(terms.LYRICS))
            .min(2, msg.min(terms.LYRICS, 2))
            .max(100, msg.max(terms.LYRICS, 100)),
        songImage: yup
            .mixed()
            .test("customRequired", "اجباری است", (value) => {
                return value?.length > 0
            })
            .test('memeType', 'فرمت نامعتبر', (value) => {
                return ['jpg', 'jpeg', 'png'].includes(value?.[0]?.name?.split?.('.').at(-1))
            }),
    })
    .required();

export default schema;