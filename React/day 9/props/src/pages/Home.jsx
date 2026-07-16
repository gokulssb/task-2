import React from 'react'

export const Home = (pro) => {

    const { friends, details } = pro
    console.log(friends);
    console.log(details);


    return (
        <>
        
            <div className='bg-amber-200 mx-15 flex justify-between items-center p-5 '>
                {friends.map((g, p) => (

                    <p key={p + 1}>{g}</p>
                ))}
            </div>
<br />
            <div  className='bg-blue-500 mx-15 flex justify-between items-center p-5 '>
                {details.map((e, i) => (
                    <div  key={i + 1}>

                        <p>{e.name}</p>
                        <p >{e.course}</p>
                        <p>{e.timing}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home