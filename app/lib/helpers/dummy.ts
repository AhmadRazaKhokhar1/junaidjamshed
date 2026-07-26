
interface DummyData {
    title: string
}
export const getDummyData = async () => {
    try {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const parsedData:DummyData[] = data?await data.json():[];
    return parsedData;
    } catch (error) {
        console.error(error,":Error In DUMMY DATA CALL!!")
    }
}