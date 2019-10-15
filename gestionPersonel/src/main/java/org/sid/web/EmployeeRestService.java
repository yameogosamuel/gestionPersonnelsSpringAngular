package org.sid.web;

import java.util.ArrayList;
import java.util.List;

import org.sid.dao.EmployeeRepository;
import org.sid.entities.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class EmployeeRestService {
	@Autowired
	private EmployeeRepository employeeRepository;
	List<Employee> list=new ArrayList<Employee>();
	
	@RequestMapping(value="/employees",method=RequestMethod.GET)
	
	public List<Employee> getEmployees(){
		return employeeRepository.findAll();
	}
	
	@RequestMapping(value="/employees/{id}",method=RequestMethod.GET)

	public Employee getEmployee(@PathVariable Long id){
		return employeeRepository.findById(id).get();
	}
	
	@RequestMapping(value="/employees",method=RequestMethod.POST)
	
	public Employee save(@RequestBody Employee c){
		/*
		 * list=getEmployees(); c.setId((long) (list.size()+1));
		 */
		return employeeRepository.save(c);
	}
	
	@RequestMapping(value="/employees/{id}",method=RequestMethod.DELETE)
	
	public boolean supprimer(@PathVariable Long id){
		employeeRepository.deleteById(id);
		return true;
	}
	
	@RequestMapping(value="/employees/{id}",method=RequestMethod.PUT)
	public Employee save(@PathVariable Long id,  @RequestBody Employee c){
		c.setId(id);
		return employeeRepository.save(c);
	}
	
	
	@RequestMapping(value="/chercherEmployees",method=RequestMethod.GET)
	
	public Page<Employee> chercher(@RequestParam(name="mc",defaultValue="") String mc,@RequestParam(name="page",defaultValue="0") int page,@RequestParam(name="size",defaultValue="5") int size){
		return employeeRepository.chercher("%"+mc+"%", new PageRequest(page, size));
	}
}
