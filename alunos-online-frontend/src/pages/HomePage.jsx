import logo from '../assets/logo-uniesp.jpg';
import pencil_square from '../assets/pencil-square.svg';
import viewer from '../assets/viewer.ico';
import { Card, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <div className="page-header"><img src={logo} alt="Logo UNIESP" />;</div>
          <h2><del>Web design is my passion</del></h2>
          <br />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Card>
              <Card.Img variant="top" src={viewer}
                style={{
                  width: '25%',
                  height: '25%',
                  objectFit: 'cover'
                }}
              />
              <Card.Body>
                <Card.Title>Lista de alunos</Card.Title>
                <Card.Text>
                  Clique aqui para ver a relação de alunos
                </Card.Text>
                <Button variant="primary" href="/alunos">Alunos</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-6">
            <Card>
              <Card.Img variant="top" src={pencil_square}
                style={{
                  width: '25%',
                  height: '25%',
                  objectFit: 'cover'
                }} />
              <Card.Body>
                <Card.Title>Cadastro</Card.Title>
                <Card.Text>
                  No link abaixo podes realizar o cadastro de um aluno
                </Card.Text>
                <Button variant="primary" href="/cadastro">Cadastro</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomePage;