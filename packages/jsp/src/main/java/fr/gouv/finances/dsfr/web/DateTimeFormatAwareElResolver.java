/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr.web;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.HashMap;
import java.util.Map;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

/**
 * Formate dans la vue une propriété date ou/et heure annotée avec @DateTimeFormat.
 */
@Component
final class DateTimeFormatAwareElResolver extends AbstractFormatAwareElResolver<DateTimeFormat>
{

    /** position du style de date dans pattern date et heure */
    private static final int POSITION_DATE_STYLE_DATE_ET_HEURE = 0;

    /** position du style d'heure dans le pattern date et heure */
    private static final int POSITION_HEURE_STYLE_DATE_ET_HEURE = 1;

    /** longueur du pattern de style date ou heure */
    private static final int LONGUEUR_STYLE_DATE_OU_HEURE = 1;

    /** longueur du pattern de style date et heure */
    private static final int LONGUEUR_STYLE_DATE_ET_HEURE = 2;

    /** nombre de minutes par heure */
    private static final int MINUTES_PAR_HEURES = 60;

    /** Formats de date / heure prédéfinis. */
    private static final Map<String, FormatStyle> formatStyles = new HashMap<String, FormatStyle>()
    {
        /**
         * serialVersionUID
         */
        private static final long serialVersionUID = 1L;
    };

    static
    {
        /** style court : '12.13.52' ou '3:30pm' */
        formatStyles.put("S", FormatStyle.SHORT);
        /** style moyen : 'Jan 12, 1952' */
        formatStyles.put("M", FormatStyle.MEDIUM);
        /** style long : 'January 12, 1952' */
        formatStyles.put("L", FormatStyle.LONG);
        /** style complet : 'Tuesday, April 12, 1952 AD' or '3:30:42pm PST' */
        formatStyles.put("F", FormatStyle.FULL);
    }

    /**
     * Instanciation de date time format aware el resolver.
     */
    public DateTimeFormatAwareElResolver()
    {
        super(DateTimeFormat.class);
    }

    /**
     * Formatage des types LocalDate, LocalTime, LocalDateTime et Duration. {@inheritDoc}
     * 
     * @see fr.gouv.finances.dsfr.web.AbstractFormatAwareElResolver#isFormattable(java.lang.Object)
     */
    @Override
    protected boolean isFormattable(Object value)
    {
        return value instanceof LocalDate || value instanceof LocalTime || value instanceof LocalDateTime || value instanceof Duration;
    }

    /**
     * Formate la propriété avec un formateur de date / heure construit sur le format indiqué sur l'annotation de la
     * propriété. {@inheritDoc}
     * 
     * @see fr.gouv.finances.dsfr.web.AbstractFormatAwareElResolver#getFormattedValue(java.lang.Object,
     *      java.lang.annotation.Annotation)
     */
    @Override
    protected String getFormattedValue(Object value, DateTimeFormat formatAnnotation)
    {
        DateTimeFormatter dateTimeFormatter = getFormatter(value, formatAnnotation);
        return format(value, dateTimeFormatter);
    }

    /**
     * Formate la propriété avec un formateur de date / heure. Une durée est convertie en heure / minutes.
     *
     * @param value propriété à formater
     * @param dateTimeFormatter formateur de date / heure
     * @return valeur formatée en texte
     */
    private String format(Object value, DateTimeFormatter dateTimeFormatter)
    {
        String valueAsString;
        if (value instanceof Duration)
        {
            /** conversion de la durée en heures / minutes, et formaté comme un LocalTime */
            Duration duration = (Duration) value;
            long minutes = duration.toMinutes();
            LocalTime localTime = LocalTime.of((int) minutes / MINUTES_PAR_HEURES, (int) minutes % MINUTES_PAR_HEURES);
            valueAsString = localTime.format(dateTimeFormatter);
        }
        else if (value instanceof LocalDate)
        {
            /** formatage d'une date */
            LocalDate localDate = (LocalDate) value;
            valueAsString = localDate.format(dateTimeFormatter);
        }
        else if (value instanceof LocalTime)
        {
            /** formatage d'une heure */
            LocalTime localTime = (LocalTime) value;
            valueAsString = localTime.format(dateTimeFormatter);
        }
        else
        {
            /** formatage d'une date et heure */
            LocalDateTime localDateTime = (LocalDateTime) value;
            valueAsString = localDateTime.format(dateTimeFormatter);
        }
        return valueAsString;
    }

    /**
     * Créer un formateur de date / heure basé sur le format de @DateTimeFormat.
     *
     * @param value propriété à formater
     * @param dateTimeFormat annotation portant le format
     * @return formateur de date / heure
     */
    private DateTimeFormatter getFormatter(Object value, DateTimeFormat dateTimeFormat)
    {
        DateTimeFormatter dateTimeFormatter;
        if (!dateTimeFormat.pattern().isEmpty())
        {
            /** formatage avec un pattern personnalisé */
            dateTimeFormatter = DateTimeFormatter.ofPattern(dateTimeFormat.pattern());
        }
        else if (dateTimeFormat.iso() != DateTimeFormat.ISO.NONE)
        {
            /** formatage avec un format ISO */
            switch (dateTimeFormat.iso())
            {
                case DATE:
                    /** date ISO */
                    dateTimeFormatter = DateTimeFormatter.ISO_LOCAL_DATE;
                    break;

                case TIME:
                    /** heure ISO */
                    dateTimeFormatter = DateTimeFormatter.ISO_LOCAL_TIME;
                    break;

                case DATE_TIME:
                default:
                    /** date et heure ISO */
                    dateTimeFormatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
                    break;
            }
        }
        else
        {
            /** formatage avec un style prédéfini */

            /** style de la date */
            FormatStyle dateStyle = getDateStyle(dateTimeFormat);
            /** style de l'heure */
            FormatStyle timeStyle = getTimeStyle(dateTimeFormat);

            if (value instanceof Duration)
            {
                /** pour une durée pas de style prédéfini adapté : formater en ISO */
                dateTimeFormatter = DateTimeFormatter.ISO_LOCAL_TIME;
            }
            else if (value instanceof LocalDate)
            {
                /** format prédéfini de date */
                dateTimeFormatter = DateTimeFormatter.ofLocalizedDate(dateStyle);
            }
            else if (value instanceof LocalTime)
            {
                /** format prédéfini d'heure */
                dateTimeFormatter = DateTimeFormatter.ofLocalizedTime(dateStyle);
            }
            else
            {
                /** format prédéfini de date / heure */
                dateTimeFormatter = DateTimeFormatter.ofLocalizedDateTime(dateStyle, timeStyle);
            }
        }
        return dateTimeFormatter;
    }

    /**
     * extraction de l'annotation du style prédéfini d'heure.
     *
     * @param dateTimeFormat annotation du format
     * @return style d'heure
     */
    private FormatStyle getTimeStyle(DateTimeFormat dateTimeFormat)
    {
        /** par défaut style court */
        FormatStyle timeStyle = FormatStyle.SHORT;

        String style = null;
        if (dateTimeFormat.style().length() == LONGUEUR_STYLE_DATE_ET_HEURE)
        {
            /** les styles de date et heure sont définis, le style d'heure est indiqué par le 2e caractère */
            style = dateTimeFormat.style().substring(POSITION_HEURE_STYLE_DATE_ET_HEURE,
                POSITION_HEURE_STYLE_DATE_ET_HEURE + LONGUEUR_STYLE_DATE_OU_HEURE);
        }
        else if (dateTimeFormat.style().length() == LONGUEUR_STYLE_DATE_OU_HEURE)
        {
            /** seul le style d'heure est défini */
            style = dateTimeFormat.style().substring(0, LONGUEUR_STYLE_DATE_OU_HEURE);
        }

        if (style != null)
        {
            timeStyle = formatStyles.get(style);

            if (timeStyle == null)
            {
                /** format invalide : prendre le style court */
                timeStyle = FormatStyle.SHORT;
            }
        }

        return timeStyle;
    }

    /**
     * extraction de l'annotation du style prédéfini de date.
     *
     * @param dateTimeFormat annotation du format
     * @return style de date
     */
    private FormatStyle getDateStyle(DateTimeFormat dateTimeFormat)
    {
        FormatStyle dateStyle = null;

        /** un ou deux caractère selon format date ou date / heure */
        if (dateTimeFormat.style().length() == LONGUEUR_STYLE_DATE_ET_HEURE)
        {
            /** le format de date est indiqué par le 1er caractère */
            dateStyle = formatStyles.get(dateTimeFormat.style().substring(POSITION_DATE_STYLE_DATE_ET_HEURE,
                POSITION_DATE_STYLE_DATE_ET_HEURE + LONGUEUR_STYLE_DATE_OU_HEURE));
        }
        else if (dateTimeFormat.style().length() == LONGUEUR_STYLE_DATE_OU_HEURE)
        {
            /** seul le style de date est défini */
            dateStyle = formatStyles.get(dateTimeFormat.style().substring(0, LONGUEUR_STYLE_DATE_OU_HEURE));
        }

        if (dateStyle == null)
        {
            /** par défaut style court */
            dateStyle = FormatStyle.SHORT;
        }

        return dateStyle;
    }

}
