import React from 'react'

const Footer = () => {

    const listFooter =[
        {link:"Instagram", path:"/"},
        {link:"Twitter", path:"/"},
        {link:"Tiktok", path:"/"},
        {link:"WhatsApp", path:"/"},
        {link:"Youtube", path:"/"},
    ]
  return (
    <div>
        <footer className='flex bg-slate-500'>
            <div>
                <div>
                    <h1>This is Footer</h1>
                </div>
                <div>
                    <ul>
                        {listFooter.map(({link,path})=>{
                            <a key={link} href={path}>{link}</a>
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer