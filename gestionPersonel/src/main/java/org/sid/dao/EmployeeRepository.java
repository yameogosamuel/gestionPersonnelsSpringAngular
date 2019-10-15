package org.sid.dao;


import org.sid.entities.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	 @Query(value="select * from employee e where e.nom like :x",nativeQuery = true)
	 //@Query("select e from employee e where e.nom like :x")
     public Page<Employee> chercher(@Param("x")String mc, Pageable pageable);
	 }