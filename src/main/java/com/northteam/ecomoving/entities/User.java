/**
 * 
 */
package com.northteam.ecomoving.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * @author igayolfernan
 *
 */
@Entity
@Table(name = "Users")
public class User {

	@Id
	@SequenceGenerator(name = "SEQ_USERS_GEN", sequenceName = "SEQ_USERS", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="SEQ_USERS_GEN")
	private Long id;
	
	@Column(name = "FIRSTNAME")
	private String firstName;
	
	@Column(name = "LASTNAMES")
	private String lastNames;

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the firsName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param firsName the firsName to set
	 */
	public void setFirstName(String firsName) {
		this.firstName = firsName;
	}

	/**
	 * @return the lastNames
	 */
	public String getLastNames() {
		return lastNames;
	}

	/**
	 * @param lastNames the lastNames to set
	 */
	public void setLastNames(String lastNames) {
		this.lastNames = lastNames;
	}
	
	
	
}
