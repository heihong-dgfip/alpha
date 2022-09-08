/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr.web;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import org.springframework.core.annotation.AliasFor;

/**
 * Annotation pour formater dans les vues une propriété booléenne. Cette annotation est lue sur la propriété par
 * {@link BooleanFormatAwareElResolver} qui en extrait le prefix, auquel est concaténée la valeur booléenne, et
 * constitue la clé du message affiché dans la vue.
 * <p>
 * Dans l'exemple suivant :<br>
 * {@code @BooleanFormat("rechercher.proposition.recapitulatif.trajet-direct")}<br>
 * {@code private boolean trajetDirect;}
 * <p>
 * lorsque la propriété à la valeur {@code true}, le message de clé
 * {@code rechercher.proposition.recapitulatif.trajet-direct.true} sera affiché dans la vue.
 */
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.FIELD, ElementType.PARAMETER, ElementType.ANNOTATION_TYPE})
public @interface BooleanFormat
{
    /**
     * Le préfixe des messages pour ce booleen. Synonyme de {@link #prefix()}.
     * 
     * @return le préfixe des messages
     */
    @AliasFor("prefix")
    String value() default "";

    /**
     * Le préfixe des messages pour ce booleen. Synonyme de {@link #value()}.
     * 
     * @return le préfixe des messages
     */
    @AliasFor("value")
    String prefix() default "";
}
