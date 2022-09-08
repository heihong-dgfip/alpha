/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controller de la page d'accueil.
 */
@Controller
@RequestMapping("/confirmation")
public class ConfirmationController extends BaseController
{
  Logger log = LoggerFactory.getLogger(ConfirmationController.class);

  /**
   * Instanciation de accueil controller.
   *
   * @param usagerService Service usager
   */
  public ConfirmationController()
  {
    super();
  }

  /**
   * Page d'accueil.
   *
   * @param model Modèle de la vue
   * @return Page d'accueil
   */
  @GetMapping
  public String afficher(Model model)
  {
    log.info("confirmation");
    
    model.addAttribute("email", Storage.email);
    model.addAttribute("message", Storage.message);
    
    return "confirmation";
  }
}
