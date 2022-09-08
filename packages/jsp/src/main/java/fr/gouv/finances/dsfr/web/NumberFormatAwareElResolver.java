/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr.web;

import java.math.BigDecimal;
import java.text.DecimalFormat;

import org.springframework.format.annotation.NumberFormat;
import org.springframework.stereotype.Component;

/**
 * Formate dans la vue une propriété numérique annotée avec {@link NumberFormat}.
 */
@Component
final class NumberFormatAwareElResolver extends AbstractFormatAwareElResolver<NumberFormat>
{

    /**
     * Instanciation de number format aware el resolver.
     */
    public NumberFormatAwareElResolver()
    {
        super(NumberFormat.class);
    }

    /**
     * Formatage des types BigDecimal, et autres types numériques {@inheritDoc}
     * 
     * @see fr.gouv.finances.dsfr.web.AbstractFormatAwareElResolver#isFormattable(java.lang.Object)
     */
    @Override
    protected boolean isFormattable(Object value)
    {
        return value instanceof Number || value instanceof BigDecimal;
    }

    /**
     * Formate la propriété avec un formateur de nombre construit sur le format indiqué sur l'annotation de la
     * propriété. {@inheritDoc}
     * 
     * @see fr.gouv.finances.dsfr.web.AbstractFormatAwareElResolver#getFormattedValue(java.lang.Object,
     *      java.lang.annotation.Annotation)
     */
    @Override
    protected String getFormattedValue(Object value, NumberFormat formatAnnotation)
    {
        return format(value, formatAnnotation);
    }

    /**
     * Formate la propriété avec un formateur de nombre.
     *
     * @param genericValue propriété à formater
     * @param numberFormat formateur de nombre
     * @return valeur formatée en texte
     */
    private String format(Object genericValue, NumberFormat numberFormat)
    {
        /** la valeur à formater, de type int, double, ... */
        Object value;
        /** si c'est un BigDecimal convertir en double */
        if (genericValue instanceof BigDecimal)
        {
            /** convertir un BigDecimal en double */
            value = ((BigDecimal) genericValue).doubleValue();
        }
        else
        {
            /** sinon on garde le type de la propriété */
            value = genericValue;
        }

        /** la valeur formatée */
        String valueAsString;

        if (!numberFormat.pattern().isEmpty())
        {
            /** formatage avec un pattern */
            /** obtenir un formateur de nombre */
            java.text.NumberFormat numberFormatter = java.text.NumberFormat.getInstance();
            if (numberFormatter instanceof DecimalFormat)
            {
                /** appliquer le pattern */
                ((DecimalFormat) numberFormatter).applyPattern(numberFormat.pattern());
                /** formater la propriété */
                valueAsString = numberFormatter.format(value);
            }
            else
            {
                /** ne doit pas arriver */
                valueAsString = "";
            }
        }
        else
        {
            /** formatage avec un style prédéfini */
            java.text.NumberFormat numberFormatter;
            switch (numberFormat.style())
            {
                /** formatage d'un nombre */
                case DEFAULT:
                case NUMBER:
                    numberFormatter = java.text.NumberFormat.getNumberInstance();
                    valueAsString = numberFormatter.format(value);
                    break;

                /** formatage d'un pourcentage */
                case PERCENT:
                    numberFormatter = java.text.NumberFormat.getPercentInstance();
                    valueAsString = numberFormatter.format(value);
                    break;

                /** formatage d'une monaie, arrondi à l'euro */
                case CURRENCY:
                    numberFormatter = java.text.NumberFormat.getCurrencyInstance();
                    numberFormatter.setMinimumFractionDigits(0);
                    valueAsString = numberFormatter.format(value);
                    break;

                default:
                    valueAsString = "";
            }
        }

        /** retourner la valeur formatée */
        return valueAsString;
    }

}
