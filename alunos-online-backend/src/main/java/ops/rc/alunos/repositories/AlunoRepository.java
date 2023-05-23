package ops.rc.alunos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ops.rc.alunos.models.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long>{

}
