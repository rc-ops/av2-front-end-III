import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ListaAlunos = () => {
    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [curso, setCurso] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/alunoonline/api/alunos").then((response) => {
            setAlunos(response.data);
        });
    }, []);

    // function handleEditClick(id) {
    //     const updatedData = {
    //         nome, sobrenome, email, curso
    //     };
    //     updateAluno(id, updatedData);
    // }

    // const updateAluno = (id, data) => {

    //     axios.put(`http://localhost:8080/alunoonline/api/alunos/atualizar/${id}`, data)
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error => console.error(error));
    // }

    const deleteAluno = (id) => {
        axios.delete(`http://localhost:8080/alunoonline/api/alunos/delete/${id}`)
            .then(response => {
                setAlunos(alunos.filter(aluno => aluno.id !== id));
            })
            .catch(error => { console.log(error) });
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Relação de alunos cadastrados</h2>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Email</th>
                            <th>Curso</th>
                            <th>Gerenciar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {alunos.map((aluno) => (
                            <tr key={aluno.id}>
                                <td> {aluno.nome} </td>
                                <td> {aluno.sobrenome} </td>
                                <td> {aluno.email} </td>
                                <td> {aluno.curso} </td>
                                <td>
                                    <Link to={`/atualizar/${aluno.id}`} className="btn btn-info">Editar</Link>
                                    <button onClick={() => deleteAluno(aluno.id)} className="btn btn-danger">Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ListaAlunos