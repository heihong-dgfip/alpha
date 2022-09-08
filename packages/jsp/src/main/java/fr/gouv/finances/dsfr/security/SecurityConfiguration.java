/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 * 
 */
package fr.gouv.finances.dsfr.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Configuration de la sécurité et des droits d'accès.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter
{

    /**
     * Instanciation de security configuration.
     *
     * @param userDetailsService service détails utilisateur
     */
    public SecurityConfiguration()
    {
        super();
    }

    /**
     * Les ressources statiques sont accessibles publiquement. Les pages d'erreur sont accessibles publiquement. La page
     * fonctionnalité non implémentée est accessible publiquement. Toutes les autres pages requièrent d'être
     * authentifié. Configuration de la page à afficher pour un accès non autorisé. Configuration de la page de
     * connexion. Configuration de l'uri et de la page de déconnexion (page de connexion avec un message). {@inheritDoc}
     * 
     * @see org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter#configure(org.springframework.security.config.annotation.web.builders.HttpSecurity)
     */
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception
    {
        httpSecurity.authorizeRequests().anyRequest().permitAll();
    }
}
