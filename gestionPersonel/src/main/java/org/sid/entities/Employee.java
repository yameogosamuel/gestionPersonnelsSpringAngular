package org.sid.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Employee implements Serializable{
	@Id @GeneratedValue
	private  Long id;
	@Column
	private String matr;
	@Column
	private String nom;
	@Column
	private String prenom;
	@Column
	private String service;
	
	
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Employee(String matr, String nom, String prenom, String service) {
		super();
		this.matr = matr;
		this.nom = nom;
		this.prenom = prenom;
		this.service = service;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getMatr() {
		return matr;
	}


	public void setMatr(String matr) {
		this.matr = matr;
	}


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public String getPrenom() {
		return prenom;
	}


	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}


	public String getService() {
		return service;
	}


	public void setService(String service) {
		this.service = service;
	}
	
	
	
	

}
