import '../components/NavBar'
import NavBar from "../components/NavBar";
import '../components/NavBar.module.css'
import css from './CadastroProf.module.css'


function CadastroProfessores() {
    return(
        <div className={css.container1}>
            <NavBar></NavBar>
            <div className={css.ContainerCad}>
                <button id={css.Voltar}>Voltar</button>
            </div>

            <div className={css.container2}>
                <h1 id={css.Cad}>Cadastro de</h1>
                <h1 id={css.Professor}>Professores</h1>

                <p id={css.txtnome}>Nome</p>
                <input className={css.input} id={css.Nome} type="text"/>

                <p id={css.txtemail}>E-mail</p>
                <input className={css.input} id={css.Email} type="text"/>

                <p id={css.txtsenha}>Senha</p>
                <input className={css.input} id={css.Senha} type="password"/>

                <p id={css.txtcpf}>CPF</p>
                <input className={css.input} id={css.CPF} type="text"/>

                <p id={css.txtnif}>NIF</p>
                <input className={css.input} id={css.NIF} type="text"/>

                <p id={css.txtnascimento}>Data de nascimento</p>
                <input className={css.input} id={css.Data} type="date"/>

                <button id={css.Concluir}>Concluir</button>
            </div>
        </div>
    )
}

export default CadastroProfessores;