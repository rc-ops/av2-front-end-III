package ops.rc.alunos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ops.rc.alunos.exceptions.ResourceNotFoundException;
import ops.rc.alunos.models.Aluno;
import ops.rc.alunos.repositories.AlunoRepository;

@Service
public class AlunoService {
	@Autowired
	private AlunoRepository repository;
	
	public List<Aluno> listaAlunos(){
		return repository.findAll();
	}

	public Aluno getAlunoById(Long id) {
		return repository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Aluno não encontrado no sistema."));
	}
	
	public Aluno criarAluno(Aluno aluno) {
		return repository.save(aluno);
	}
	
	public void deletarAluno(Long id) {
		repository.deleteById(id);
	}
	
	public Aluno atualizarAluno(Long id, Aluno alunoAtualizado) {
		Aluno aluno = repository.findById(id).orElse(null);
		aluno.setNome(alunoAtualizado.getNome());
		aluno.setSobrenome(alunoAtualizado.getSobrenome());
		aluno.setEmail(alunoAtualizado.getEmail());
		aluno.setCurso(alunoAtualizado.getCurso());
		return repository.save(aluno);
	}
}
