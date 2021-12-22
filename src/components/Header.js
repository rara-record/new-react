/* eslint-disable jsx-a11y/anchor-is-valid  */

function Logo() {
    return (
        <h1>
            <strong>DCODELAB</strong><br />
            <span>UI/UX DESIGN&DEVELOPMENT</span>
        </h1>
    )
}

const Menu = () => {
    return (

        <a href="#" className="menu">
            <i className="fas fa-bars"></i>
        </a>
    )
}

export { Logo, Menu };