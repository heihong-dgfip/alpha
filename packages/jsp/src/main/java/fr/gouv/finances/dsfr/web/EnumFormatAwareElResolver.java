/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr.web;

import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceAware;
import org.springframework.stereotype.Component;

/**
 * Formate dans la vue une propriété énumération annotée avec {@link @EnumFormat}.
 */
@Component
final class EnumFormatAwareElResolver extends AbstractFormatAwareElResolver<EnumFormat> implements MessageSourceAware
{

    /** service de messages i18n. */
    private MessageSource messageSource;

    /**
     * Instanciation de enum format aware el resolver.
     */
    public EnumFormatAwareElResolver()
    {
        super(EnumFormat.class);
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
     * Formatage de n'importe quel type Enum
     * <p>
     * {@inheritDoc}
     * 
     * @see fr.gouv.finances.dsfr.web.AbstractFormatAwareElResolver#isFormattable(java.lang.Object)
     */
    @Override
    protected boolean isFormattable(Object value)
    {
        return value instanceof Enum;
    }

    /**
     * Formate la propriété en prenant le texte dans les message bundles dont la clé est le préfixe indiqué dans
     * l'annotation suivi du nom de l'énumération de la propriété.
     * <p>
     * {@inheritDoc}
     * 
     * @see fr.gouv.finances.dsfr.web.AbstractFormatAwareElResolver#getFormattedValue(java.lang.Object,
     *      java.lang.annotation.Annotation)
     */
    @Override
    protected String getFormattedValue(Object value, EnumFormat formatAnnotation)
    {
        /** préfixe de message à renvoyer */
        String prefix = "";

        if (!formatAnnotation.prefix().isEmpty() || !formatAnnotation.value().isEmpty())
        {
            if (formatAnnotation.value().isEmpty())
            {
                prefix = formatAnnotation.prefix() + ".";
            }
            else
            {
                prefix = formatAnnotation.value() + ".";
            }
        }

        @SuppressWarnings("rawtypes")
        Enum enumeration = (Enum) value;

        /** message dont la clé est le préfixe concaténé avec le nom de la valeur d'énumération */
        return messageSource.getMessage(prefix + enumeration.name(), null, Locale.getDefault());
    }

}
