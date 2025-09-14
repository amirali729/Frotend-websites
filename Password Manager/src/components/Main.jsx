import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Main = () => {
    const ref = useRef()
    const passwordref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])


    const showPassword = () => {
        // alert("Show Password")
        passwordref.current.type = "text"
        if (ref.current.src.includes("/eyecross.png")) {
            ref.current.src = "/eye.png"
            passwordref.current.type = "text"
        } else {
            ref.current.src = "/eyecross.png"
            passwordref.current.type = "password"
        }

    }
    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }
    const handleSubmit = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="absolute top-0  z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

            </div>
            <div className='mycontainer h-full  items-center justify-center py-4 flex-col  flex mx-auto'>
                <h1 className='text-white text-4xl font-bold '><span className='text-green-500'> &lt;</span>

                    <span>Pass</span><span className='text-green-500'>Owner/&gt;</span></h1>
                <p className="text-xl font-semibold text-white mb-2">your own password manager</p>

                <div className="w-full text-white p-4 gap-8">
                    <input value={form.site} onChange={handleSubmit} name='site' placeholder='Enter website URL' className='placeholder:font-bold placeholder:text-gray-600  w-full  border border-white  p-4 py-1 rounded-full' type="text" />

                    <div className='mt-2.5 w-full gap-6 flex'>
                        <input value={form.username} onChange={handleSubmit} name='username' placeholder='Enter username' className='placeholder:font-bold placeholder:text-gray-600  w-full border border-white p-4 py-1 rounded-full' type="text" />
                        <div className="relative items-center">
                            <input value={form.password} onChange={handleSubmit} name='password' ref={passwordref} type='password' placeholder='Enter your password' className='border placeholder:font-bold bg-gray-700 placeholder:text-gray-600 border-white p-4 py-1 rounded-full' />
                            <span className="absolute right-0 " onClick={showPassword}>
                                <img width={40} ref={ref} className='p-2  hover:cursor-pointer' src='/eye.png' />
                            </span>
                        </div>
                    </div>
                </div>
                <button onClick={savePassword} className="bg-slate-700 gap-3 py-2 px-2 rounded-full flex justify-center items-center hover:p-2.5 hover:bg-transparent border border-slate-900 hover:uppercase hover:cursor-pointer hover:text-orange-500">
                    <lord-icon
                        src="https://cdn.lordicon.com/fgxwhgfp.json"
                        trigger="hover">
                    </lord-icon>
                    Add Password</button>
                    <h2 className='font-bold bg-slate-600 rounded-4xl p-4 my-4 hover:bg-transparent border text-center py-3 hover:text-slate-800 hover:cursor-pointer text-3xl'>your password</h2>
                <div className="password text-white w-full">
                    {passwordArray.length === 0 && <div>no password to show</div>}
                    {passwordArray.length != 0 &&<table className="table-auto rounded-xl overflow-hidden w-full">
                        <thead className='bg-slate-500'>
                             <tr className='w-32 text-center'>
                                <th className='py-2'>Website Name</th>
                                <th className='py-2'>userName</th>
                                <th className='py-2'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-neutral-900'>
                            {passwordArray.map((item,index) => {
                            return <tr key={index}>
                                <td className='w-32 text-center py-2 '><a href={item.site} target='_blank'>{item.site} </a></td>
                                <td className='w-32 text-center py-2  '>{item.username}</td>
                                <td className='w-32 text-center py-2  '>{item.password}</td>
                            </tr>
                            })}
                            
                        </tbody>
                    </table>}
                </div>
            </div>

        </>
    )
}

export default Main
