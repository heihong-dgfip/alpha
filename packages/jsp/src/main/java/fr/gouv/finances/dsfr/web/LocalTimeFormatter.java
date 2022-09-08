/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr.web;

import java.text.ParseException;
import java.time.LocalTime;
import java.time.format.DateTimeParseException;
import java.util.Locale;

import org.springframework.format.Formatter;

/**
 * Formateur pour le type {@link java.time.LocalTime LocalTime}.
 * <p>
 * Associer ce formateur avec une propriété d'heure, avec la méthode
 * {@link org.springframework.web.bind.WebDataBinder#addCustomFormatter addCustomFormatter} dans
 * {@link org.springframework.web.bind.annotation.InitBinder InitBinder} du contrôleur, pour formater une propriété
 * {@code LocalTime} du modèle au format ISO-8601 dans le contrôle de saisie du formulaire, et inversement.
 */
public class LocalTimeFormatter implements Formatter<LocalTime>
{

    /**
     * Instanciation de local time formatter.
     */
    public LocalTimeFormatter()
    {
        /** rien à initialiser */
    }

    /**
     * Formate la valeur de la propriété en texte pour la {@code value} du contrôle de saisie.
     * <p>
     * {@inheritDoc}
     * 
     * @see org.springframework.format.Printer#print(java.lang.Object, java.util.Locale)
     */
    @Override
    public String print(LocalTime time, Locale locale)
    {
        if (time == null)
        {
            /** texte vide si la propriété est null */
            return "";
        }
        else
        {
            /** convertir au format ISO-8601 : 10:15 */
            return time.toString();
        }
    }

    /**
     * Convertit la {@code value} du contrôle de saisie en {@code LocalTime} pour la valeur de la propriété.
     * <p>
     * {@inheritDoc}
     * 
     * @see org.springframework.format.Parser#parse(java.lang.String, java.util.Locale)
     */
    @Override
    public LocalTime parse(String text, Locale locale) throws ParseException
    {
        if (text == null || text.isEmpty())
        {
            /** propriété null si le contrôle de saisie est vide */
            return null;
        }
        else
        {
            try
            {
                /** décoder le texte en format ISO-8601 : 10:15 */
                return LocalTime.parse(text);
            }
            catch (DateTimeParseException e)
            {
                /** si format d'heure invalide, remonter une exception au contrôleur */
                throw new ParseException(e.getMessage(), e.getErrorIndex());
            }
        }
    }

}
