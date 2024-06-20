export default function Leson07() {

    

    //1.Типизауия строк
    let user: string = 'Donald'
    user = 'Angela'

    //2.Типизауия чисел

    let importNum: number = 42
    importNum = -10
    console.log(importNum);
    
    return (
        <>
            <h1>React Typecsript</h1>
            <p>{user}</p>
            <p>{importNum}</p>
        </>

    )
}