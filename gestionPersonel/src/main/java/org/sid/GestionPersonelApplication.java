package org.sid;

import org.sid.dao.EmployeeRepository;
import org.sid.entities.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GestionPersonelApplication implements CommandLineRunner {
	
	@Autowired
	EmployeeRepository employeeRepository;

	public static void main(String[] args) {
		SpringApplication.run(GestionPersonelApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
	
		/*
		 * Employee e1=new Employee("0016A", "YAMEOGO", "Samuel","RTB"); Employee e2=new
		 * Employee("0017A", "OUEDRAOGO", "Ibrahim","Sidwaya"); Employee e3=new
		 * Employee("0018A","YAMEOGO", "Nathalie","RTB"); Employee e4=new
		 * Employee("0019A", "KABORE", "Odile","Sidwaya"); Employee e5=new
		 * Employee("0020A", "BORO", "Koussié","SIG");
		 * 
		 * employeeRepository.save(e1); employeeRepository.save(e2);
		 * employeeRepository.save(e3); employeeRepository.save(e4);
		 * employeeRepository.save(e5);
		 */
		
	}

}
