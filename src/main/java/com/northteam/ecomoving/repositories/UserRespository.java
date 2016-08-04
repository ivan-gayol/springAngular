/**
 * 
 */
package com.northteam.ecomoving.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.northteam.ecomoving.entities.User;

/**
 * @author igayolfernan
 *
 */
public interface UserRespository extends JpaRepository<User, Long> {

}
