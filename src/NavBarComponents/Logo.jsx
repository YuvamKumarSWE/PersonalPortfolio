import './navbar.css'

export default function Logo() {
    return (
        <div className="flex items-center space-x-4 justify-evenly ml-[2%]">
            <img src="public/yk.png" alt="" className="logo-image" />
            <h1 className="name">Yuvam Kumar</h1>
        </div>
    )
}