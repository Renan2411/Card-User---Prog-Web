function Card(props) {
    return (
        <div className='profile-card'>
            <div className="image">
                <div className="profile-img">
                    <span className="initials">{props.user.iniciais}</span>
                </div>
            </div>
            <div className="text-data">
                <span className="name">{props.user.nome}</span>
                <span className="job">{props.user.profissao}</span>
            </div>
            <div className="text-data">
                <span className="cidade">{props.user.cidade}/{props.user.estado}</span>
                <span className="aniversario">Aniversário: {props.user.nascimento}</span>
            </div>
            <div className="media-buttons">
                <a href="#" style={{ background: '#4267b2' }} className="link">
                    <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" style={{ background: '#1da1f2' }} className="link">
                    <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" style={{ background: '#e1306c' }} className="link">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="#" style={{ background: '#ff0000' }} className="link">
                    <i className="bx bxl-youtube"></i>
                </a>
            </div>
            <div className="buttons">
                <button className="button">Altura {props.user.altura}</button>
                <button className="button">Peso {props.user.peso}kg</button>
                <button className="button">IMC {props.user.imc}</button>
            </div>
            <div className="analytics">
                <div className="data">
                    <i className="bx bx-heart"></i>
                    <span className="nu">{props.user.likes}k</span>
                </div>
                <div className="data">
                    <i className="bx bx-message-rounded"></i>
                    <span className="nu">{props.user.messages}k</span>
                </div>
                <div className="data">
                    <i className="bx bx-share"></i>
                    <span className="nu">{props.user.shares}k</span>
                </div>
            </div>
        </div>
    )
}

export default Card