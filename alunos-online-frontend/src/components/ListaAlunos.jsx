import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ListaAlunos = () => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/alunoonline/api/alunos").then((response) => {
            setAlunos(response.data);
        });
    }, []);

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
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ListaAlunos