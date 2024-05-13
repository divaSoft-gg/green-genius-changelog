import './index.css';

export default function HeaderComponent() {
    return (
        <header>
            <div className='bradContainer'>
                <div className="logoContainer">
                    <div className="overlay"></div>
                    <img src="/official_logo.png" alt="green-genius logo" />
                </div>
                <div className='brandName'>
                    <span>Green Genius changelog</span>
                    <small>By <a href="https://www.diva-software.com/" target="_blank">DivaSoftware</a></small>
                </div>
            </div>
            <p className='changelogDescription'>
                The official <strong>Green Genius</strong> space where we share the latest product changelogs, offering insights into new features, improvements, and bug fixes.
            </p>
        </header>
    )
}


