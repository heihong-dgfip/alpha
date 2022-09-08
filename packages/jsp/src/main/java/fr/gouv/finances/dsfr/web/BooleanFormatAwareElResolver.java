/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr.web;

import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceAware;
import org.springframework.stereotype.Component;

/**
 * Formate dans la vue une propriété booléenne annotée avec {@link @BooleanFormat}.
 */
@Component
final class BooleanFormatAwareElResolver extends AbstractFormatAwareElResolver<BooleanFormat> implements MessageSourceAware
{

    /** service de messages i18n. */
    private MessageSource messageSource;

    /**
     * Instanciation de boolean format aware el resolver.
     */
    public BooleanFormatAwareElResolver()
    {
        super(BooleanFormat.class);
    }

    /**
     * (methode de remplacement)
     * <p>
     * {@inheritDoc}
     * 
     * @see org.springframework.context.MessageSourceAware#setMessageSource(org.springframework.context.MessageSource)
     */
    @Override
    public void setMessageSource(MessageSource messageSource)
    {
        this.messageSource = messageSource;
    }

    /**
     * Formatage d'un booléen
     * <p>
     * {@inheritDoc}
     * 
     * @see fr.gouv.finances.dsfr.web.AbstractFormatAwareElResolver#isFormattable(java.lang.Object)
     */
    @Override
    protected boolean isFormattable(Object value)
    {
        return value instanceof Boolean;
    }

    /**
     * Formate la propriété en prenant le texte dans les message bundles dont la clé est le préfixe indiqué dans
     * l'annotation suivi de la valeur booléenne de la propriété.
     * <p>
     * {@inheritDoc}
     * 
     * @see fr.gouv.finances.dsfr.web.AbstractFormatAwareElResolver#getFormattedValue(java.lang.Object,
     *      java.lang.annotation.Annotation)
     */
    @Override
    protected String getFormattedValue(Object value, BooleanFormat formatAnnotation)
    {
        if (!formatAnnotation.prefix().isEmpty() || !formatAnnotation.value().isEmpty())
        {
            /** préfixe de message à renvoyer */
            String prefix;
            if (formatAnnotation.value().isEmpty())
            {
                prefix = formatAnnotation.prefix();
            }
            else
            {
                prefix = formatAnnotation.value();
            }

            Boolean booleen = (Boolean) value;

            /** message dont la clé est le préfixe concaténé avec la valeur booléenne */
            return messageSource.getMessage(prefix + "." + booleen.toString(), null, Locale.getDefault());
        }
        else
        {
            return null;
        }
    }

}
