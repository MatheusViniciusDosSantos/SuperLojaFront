import React, {useEffect, useState} from "react";
import './Usuario.css';
import axios from "axios";


export default function UsuarioFunction() {
 
       const [usuario, setUsuario] = useState({nome:'',email:'', senha: ''});
       const [usuarios, setUsuarios] = useState([]);
       const [atualizar, setAtualizar] = useState({});

       useEffect(() => {
        //O que será executado
        axios.get("http://localhost:8080/api/usuario").then(result=> {
            // console.log(result.data.content);
            setUsuarios(result.data.content);
        });
       }, [atualizar/**Variaveis de alteração */])
 
    
    function handleChange(event){
        setUsuario({...usuario,[event.target.name]:event.target.value});
    }

    function handleSubmit(event){
        event.preventDefault();

        if (usuario.id == undefined) {
            axios.post("http://localhost:8080/api/usuario", usuario).then(result => {

                setAtualizar(result.data);
                //Atualizara nossa tabela
            });
        } else {
            axios.put("http://localhost:8080/api/usuario/", usuario).then(result => {

                setAtualizar(result.data);
                //Atualizara nossa tabela
            });
        }
        
    }
    function limpar(event){
        setUsuario({nome:'',email:'', senha: ''});
    }

    function excluir(id) {
        axios.delete("http://localhost:8080/api/usuario/"+id).then(() => {
            setAtualizar(id);
        });
    }
    
        return (
            <div>
               <h1>Cadastrar Usuario</h1>
                
                <form onSubmit={handleSubmit}>
                    <div className="col-6">
                        <div className="col-6">
                            <label className="form-label">Nome</label>
                            <input type="text" className="form-control" id="nome"
                                name="nome" value={usuario.nome} onChange={handleChange} />
                        </div>
                        <br />
                        <div className="col-6">
                            <label className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email"
                               name="email" value={usuario.email} onChange={handleChange} />
                        </div>
                        <br />
                        {usuario.senha != undefined && <div className="col-6">
                            <label className="form-label">Senha</label>
                            <input type="password" className="form-control" id="senha"
                                name="senha" value={usuario.senha} onChange={handleChange} />
                        </div>}
                    </div>
                    
                    <br/>
                    
                    <input type="submit" className="btn btn-primary btn-success" value="Cadastrar" /> &nbsp;&nbsp;
                    <input type="button" className="btn btn-secondary" value="Limpar/Novo" onClick={limpar} />
                </form>

                <br/>
                <br/>

                <table className="table  table-dark table-striped">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>nome</td>
                            <td>email</td>
                            <td>opções</td>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(user=>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => setUsuario(user)} className="btn btn-primary">Alterar </button> &nbsp;&nbsp;
                                <button onClick={() => excluir(user.id)} className="btn btn-primary btn-danger">Excluir</button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>

            </div>
        );
    
}