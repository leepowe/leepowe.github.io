export default function Header (){
    return `
    <header class='header'>
        <h1 id='header__logo'>Lee Powell</h1>
        <nav class='header__nav'>
            <ul class='header__nav_list'>
                <li class='header__nav_listItem'>
                    <a href='#aboutMe'>
                        About
                    </a>
                </li>
                <li class='header__nav_listItem'>
                    <a href='#projects'>
                        Projects
                    </a>
                </li>
                <li class='header__nav_listItem'>
                    <a href='#contact'>
                        Contact
                    </a>
                </li>    
            </ul>
        </nav>
    </header>
    `;
}