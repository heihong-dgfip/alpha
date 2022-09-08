/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controller de la page d'accueil.
 */
@Controller
@RequestMapping("/")
public class FormulaireController extends BaseController
{
  Logger log = LoggerFactory.getLogger(FormulaireController.class);

  /**
   * Instanciation de accueil controller.
   *
   * @param usagerService Service usager
   */
  public FormulaireController()
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
    log.info("accueil");
    /** afficher le formulaire */
    
    Formulaire formulaire = new Formulaire();
    model.addAttribute("formulaire", formulaire);
    
    return "formulaire";
  }

  @PostMapping
  public String soumission(@ModelAttribute("formulaire") Formulaire formulaire, BindingResult result, Model model)
  {
    if (formulaire.getEmail().isEmpty())
    {
      result.rejectValue("email", "erreur.champ-obligatoire");
    }
    if (formulaire.getMessage().isEmpty())
    {
      result.rejectValue("message", "erreur.champ-obligatoire");
    }
    if (!result.hasErrors())
    {
      Storage.email = formulaire.getEmail();
      Storage.message = formulaire.getMessage();
      return "redirect:confirmation";
    }

    return "formulaire";
  }
}
