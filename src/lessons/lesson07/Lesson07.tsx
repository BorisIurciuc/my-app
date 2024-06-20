export default function Lesson07() {

    

    //1.Типизауия строк
    let user: string = 'Donald'
    user = 'Angela'

    //2.Типизауия чисел

    let importNum: number = 42
    importNum = -10
    console.log(importNum);
    
    return (
        <>
            <h1>Lesson 07</h1>
            <h2>React Typecsript</h2>
            <p>{user}</p>
            <p>{importNum}</p>
        </>

    )
}