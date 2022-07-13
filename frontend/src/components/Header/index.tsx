import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container" >
                <img src={logo} alt="DS-Meta" />
                <h1>DS-Meta</h1>
                <p>Desenvolvido por
                    <a href="https://www.linkedin.com/in/bruno-c%C3%A9sar-ramos-fraga-b170ab229/"> bfraga</a>
                </p>

            </div>
        </header>
    )



}

export default Header
