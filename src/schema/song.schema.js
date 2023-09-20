import * as yup from "yup";

const schema = yup
    .object({
        songFile: yup
            .mixed()
            .test("customRequired", "اجباری است", (file) => {
                console.log('file', file);
                return file?.length > 0
            })
            .test('memeType', 'فرمت نامعتبر', (value) => {
                console.log('typw');
                return ['mp3', 'ogg'].includes(value?.[0]?.name?.split?.('.').at(-1))
            }),
    })
    .required();

export default schema;