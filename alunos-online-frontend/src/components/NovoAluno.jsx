import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

const NovoAluno = () => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [curso, setCurso] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!nome || !sobrenome || !email || !curso) {
            setModalMessage("Por favor preencha todos os campos antes de enviar");
            setShowModal(true);
            return;
        }

        const data = {
            nome, sobrenome, email, curso
        };
        axios.post('http://localhost:8080/alunoonline/api/alunos/novo', data)
            .then(response => {
                console.log(response.data); // Depois remover
                setNome("");
                setSobrenome("");
                setEmail("");
                setCurso("");
                setModalMessage("Aluno cadastrado com sucesso.");
                setShowModal(true);
            })
            .catch(error => {
                console.error(error);
                setModalMessage("Não foi possível cadastrar o estudante.");
                setShowModal(true);
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Sobrenome</label>
                    <input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Curso</label>
                    <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)} />
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
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
export default NovoAluno
