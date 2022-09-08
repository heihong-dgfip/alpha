/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr.web;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Affichage des pages d'erreur.
 * <p>
 * Ce contrôleur est appelé automatiquement par Spring car il implémente {@link ErrorController}.
 * <p>
 * {@link #getErrorPath()} indique l'uri des pages d'erreur mappée dans ce contrôleur. La page affichée correspond au code de retour http (error
 * status code).
 */
@Controller
final class ErreurController implements ErrorController
{

    /** logger */
    Logger log = LoggerFactory.getLogger(ErreurController.class);

    /** Page d'erreur lorsqu'une page n'est pas trouvée. */
    private static final String PAGE_ERREUR_404 = "error/404";

    /** Page d'erreur pour une erreur applicative. */
    private static final String PAGE_ERREUR_500 = "error/500";

    /** uri des pages d'erreur. */
    private static final String ERREUR_URI = "/error";

    public ErreurController()
    {
        super();
    }

    /**
     * Retourne la page d'erreur fonction du code d'erreur http.
     *
     * @param requete Requête http
     * @return Page d'erreur
     */
    @RequestMapping(ERREUR_URI)
    public String handleErreur(HttpServletRequest requete)
    {
        /** page d'erreur */
        String pageErreur;

        /** récupération de l'erreur http */
        Object statut = requete.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);

        if (statut != null)
        {
            Integer statusCode = Integer.valueOf(statut.toString());

            if (statusCode == HttpStatus.NOT_FOUND.value())
            {
                /** page non trouvée */
                pageErreur = PAGE_ERREUR_404;
            }
            else if (statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value())
            {
                /** erreur applicative (dans le code java */
                pageErreur = PAGE_ERREUR_500;
            }
            else
            {
                /** pour tout autre code d'erreur http on affiche la page d'erreur applicative */
                if (log.isWarnEnabled())
                {
                    log.warn(String.format("Statut HTTP %s non traité !", HttpStatus.INTERNAL_SERVER_ERROR.toString()));
                }
                pageErreur = PAGE_ERREUR_500;
            }
        }
        else
        {
            /** en l'absence de status http on affiche la page d'erreur applicative */
            log.warn("Erreur non traitée !");
            pageErreur = PAGE_ERREUR_500;
        }

        return pageErreur;
    }

    /**
     * (methode de remplacement)
     * <p>
     * {@inheritDoc}
     * 
     * @see org.springframework.boot.autoconfigure.web.ErrorController#getErrorPath()
     */
    @Override
    public String getErrorPath()
    {
        return ERREUR_URI;
    }
}
