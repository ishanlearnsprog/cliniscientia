import './svg.css'

export default function Logo() {
    return (
        <div className="logo-img-box">
            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" width="120" height="120" rx="20" fill="#2D67F6"/>
            <rect x="54" y="20" width="20" height="80" fill="white"/>
            <rect x="24" y="50" width="80" height="20" fill="white"/>
            </svg>
        </div>
    )
}
