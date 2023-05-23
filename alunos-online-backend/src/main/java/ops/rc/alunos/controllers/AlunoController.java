package ops.rc.alunos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ops.rc.alunos.models.Aluno;
import ops.rc.alunos.services.AlunoService;

@RestController
@RequestMapping("/alunoonline/api")
@CrossOrigin
public class AlunoController {
	@Autowired
	private AlunoService service;

	@GetMapping("/alunos")
	public List<Aluno> listaAlunos(){
		return service.listaAlunos();
	}
	
	@GetMapping("/alunos/{id}")
	public Aluno getAlunoById(@PathVariable("id") Long id) {
		return service.getAlunoById(id);
	}
	
	@PostMapping("/alunos/novo")
	public Aluno criarAluno(@RequestBody Aluno aluno) {
		return service.criarAluno(aluno);
	}
	
	@DeleteMapping("/alunos/delete/{id}")
	public void deletarAluno(@PathVariable("id") Long id) {
		service.deletarAluno(id);
	}
	
	@PutMapping("/alunos/atualizar/{id}")
	public Aluno atualizarAluno(@PathVariable("id") Long id, @RequestBody Aluno aluno) {
		return service.atualizarAluno(id, aluno);
	}

}
