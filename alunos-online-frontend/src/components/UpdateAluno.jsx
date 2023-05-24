import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateAluno = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const { id } = useParams();

    let navigate = useNavigate();

    const [aluno, setAluno] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        curso: ""
    });

    const loadAluno = async () => {
        const response = await axios.get(`http://localhost:8080/alunoonline/api/alunos/${id}`);
        const { nome, sobrenome, email, curso } = response.data;
        setAluno({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            curso: curso
        })
    }

    useEffect(() => {
        loadAluno();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAluno((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!aluno.nome || !aluno.sobrenome || !aluno.email || !aluno.curso) {
            setModalMessage("Por favor preencha todos os campos antes de enviar");
            setShowModal(true);
            return;
        }

        axios.put(`http://localhost:8080/alunoonline/api/alunos/atualizar/${id}`, aluno)
            .then(response => {
                navigate("/alunos");
            }).catch(error => {
                console.error(error);
                setModalMessage("Não foi possível atualizar o estudante.");
                setShowModal(true);
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h1>Editando aluno</h1>
                    <label>Nome</label>
                    <input type="text" name="nome" value={aluno.nome} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label>Sobrenome</label>
                    <input type="text" name="sobrenome" value={aluno.sobrenome} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={aluno.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Curso</label>
                    <input type="text" name="curso" value={aluno.curso} onChange={handleChange} />
                </div>
                <input className="btn btn-success" type="submit" value="Atualizar" />
                <Link to={"/alunos"} className="btn btn-secondary">Voltar</Link>
            </form>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
            </Modal>
        </>
    );
};
export default UpdateAluno
