/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Page des fonctionnalités non implémentées dans la démo.
 */
@Controller
final class NonImplementeController extends BaseController
{

    /**
     * Instanciation de non implemente controller.
     *
     * @param usagerService Service usager
     */
    public NonImplementeController()
    {
        super();
    }

    /**
     * Afficher la page de fonctionnalité non implémentée.
     *
     * @return string
     */
    @GetMapping("/non-realise")
    public String afficher()
    {
        /** page jsp fonctionnalité non implémentée */
        return "non-realise";
    }
}
