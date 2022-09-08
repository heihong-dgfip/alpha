/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr.web;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.time.temporal.TemporalAccessor;
import java.util.Locale;

import org.springframework.format.Formatter;

/**
 * Formateur pour le type {@link java.time.LocalDate LocalDate}.
 * <p>
 * Associer ce formateur avec une propriété de date, avec la méthode
 * {@link org.springframework.web.bind.WebDataBinder#addCustomFormatter addCustomFormatter} dans
 * {@link org.springframework.web.bind.annotation.InitBinder InitBinder} du contrôleur, pour formater une propriété
 * {@code LocalDate} du modèle au format JJ/MM/AAAA dans le contrôle de saisie du formulaire, et inversement.
 */
public class LocalDateFormatter implements Formatter<LocalDate>
{

    /** format de date à afficher dans le contrôle de saisie. */
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    /**
     * Instanciation de local date formatter.
     */
    public LocalDateFormatter()
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
    public String print(LocalDate localDate, Locale locale)
    {
        if (localDate == null)
        {
            /** texte vide si la propriété est null */
            return "";
        }
        else
        {
            return FORMATTER.format(localDate);
        }
    }

    /**
     * Convertit la {@code value} du contrôle de saisie en {@code LocalDate} pour la valeur de la propriété.
     * <p>
     * {@inheritDoc}
     * 
     * @see org.springframework.format.Parser#parse(java.lang.String, java.util.Locale)
     */
    @Override
    public LocalDate parse(String text, Locale locale) throws ParseException
    {
        if (text == null || text.isEmpty())
        {
            /** propriété null si le contrôle de saisie est vide */
            return null;
        }
        else
        {
            TemporalAccessor temporal;
            try
            {
                temporal = FORMATTER.parse(text);
            }
            catch (DateTimeParseException e)
            {
                /** si format de date invalide, remonter une exception au contrôleur */
                throw new ParseException(e.getMessage(), e.getErrorIndex());
            }
            return LocalDate.from(temporal);
        }
    }

}
