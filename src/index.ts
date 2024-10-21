interface HasId {
    id: number;
}

interface HasTimestamps {
    createdAt: Date;
    updatedAt: Date;
}

function addTimeStamps<T extends HasId>(temp:T): T{
    const timestamps:any = new Date().getTime()
    (temp as T & HasTimestamps).createdAt = timestamps
    (temp as T & HasTimestamps).updatedAt = timestamps
    return temp
}
interface Book {
    id: number;
    title: string;
}

const book: Book = { id: 1, title: "TypeScript Guide" };
const stampedRecord = addTimestamps(book);
console.log(stampedRecord.createdAt); // 