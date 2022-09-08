/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr.web;

import java.beans.FeatureDescriptor;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Iterator;

import javax.el.ELContext;
import javax.el.ELResolver;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.jsp.JspFactory;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

/**
 * Classe de base pour formater une propriété en texte dans une vue avec le format indiqué par une annotation sur cette
 * propriété.
 *
 * @param <T> Le type de l'annotation qui indique le format
 */
abstract class AbstractFormatAwareElResolver<T extends Annotation> extends ELResolver implements ServletContextListener
{

    Logger log = LoggerFactory.getLogger(AbstractFormatAwareElResolver.class);

    /** gestion accès concurrent. */
    private final ThreadLocal<Boolean> isGetValueInProgress = new ThreadLocal<>();

    /** type de l'annotation portant le format. */
    private final Class<T> annotationType;

    /**
     * Instanciation de format annotation aware el resolver.
     *
     * @param genericType type de l'annotation portant le format
     */
    public AbstractFormatAwareElResolver(Class<T> genericType)
    {
        super();
        this.annotationType = genericType;
    }

    /**
     * Indique si le type de la propriété peut être formaté par cette classe.
     *
     * @param propriete La propriété annotée avec le format
     * @return true, si c'est formatable
     */
    protected abstract boolean isFormattable(Object propriete);

    /**
     * Formatage textuel de la propriété avec le format indiqué.
     *
     * @param propriete La propriété annotée avec le format
     * @param formatAnnotation L'annotation qui indique le format
     * @return Le texte de la propriété formatée
     */
    protected abstract String getFormattedValue(Object propriete, T formatAnnotation);

    /**
     * (methode de remplacement) {@inheritDoc}
     * 
     * @see javax.servlet.ServletContextListener#contextInitialized(javax.servlet.ServletContextEvent)
     */
    @Override
    public void contextInitialized(ServletContextEvent event)
    {
        JspFactory.getDefaultFactory().getJspApplicationContext(event.getServletContext()).addELResolver(this);
    }

    /**
     * (methode de remplacement) {@inheritDoc}
     * 
     * @see javax.servlet.ServletContextListener#contextDestroyed(javax.servlet.ServletContextEvent)
     */
    @Override
    public void contextDestroyed(ServletContextEvent event)
    {
        /**
         * pas de code à exécuter
         */
    }

    /**
     * Obtient la propriété formatée ou la propriété même si pas formatable {@inheritDoc}
     * 
     * @see javax.el.ELResolver#getValue(javax.el.ELContext, java.lang.Object, java.lang.Object)
     */
    @Override
    public Object getValue(ELContext context, Object base, Object property)
    {
        Object value = null;

        try
        {
            if (Boolean.TRUE.equals(isGetValueInProgress.get()))
            {
                return null;
            }
            isGetValueInProgress.set(Boolean.TRUE);

            value = context.getELResolver().getValue(context, base, property);
            if (value != null && isFormattable(value))
            {
                value = getFormattedValue(base, property, value);
            }
        }
        catch (NoSuchFieldException | NoSuchMethodException e)
        {
            if (log.isTraceEnabled())
            {
                log.trace(String.format("pas de formatage pour %s", property), e);
            }
        }
        finally
        {
            isGetValueInProgress.remove();
        }

        return value;
    }

    private Object getFormattedValue(Object base, Object property, Object value) throws NoSuchFieldException, NoSuchMethodException
    {
        T formatAnnotation = getFormatAnnotation(base, property.toString());
        if (formatAnnotation != null)
        {
            String formattedValue = getFormattedValue(value, formatAnnotation);
            if (formattedValue != null)
            {
                return formattedValue;
            }
        }

        return value;
    }

    /**
     * Obtient l'annotation du format de la propriété.
     *
     * @param base L'objet de la propriété
     * @param property Le nom de propriété
     * @return l'annotation du format
     * @throws NoSuchFieldException
     * @throws NoSuchMethodException
     */
    private T getFormatAnnotation(Object base, String property) throws NoSuchFieldException, NoSuchMethodException
    {
        T fieldAnnotation;

        /** chercher l'annotation sur la propriété */
        fieldAnnotation = getFormatFieldAnnotation(base, property);

        if (fieldAnnotation == null)
        {
            /** chercher l'annotation sur le getter */
            fieldAnnotation = getFormatMethodAnnotation(base, property);
        }

        return fieldAnnotation;
    }

    /**
     * Obtient l'annotation du format de la propriété sur un champ.
     *
     * @param base L'objet de la propriété
     * @param property Le nom de propriété
     * @return l'annotation du format
     * @throws SecurityException
     * @throws NoSuchFieldException
     */
    private T getFormatFieldAnnotation(Object base, String property) throws NoSuchFieldException
    {
        if (base != null && property != null)
        {
            Field field = base.getClass().getDeclaredField(property);
            return field.getAnnotation(annotationType);
        }
        else
        {
            return null;
        }
    }

    /**
     * Obtient l'annotation du format de la propriété sur une méthode.
     *
     * @param base L'objet de la propriété
     * @param property Le nom de propriété
     * @return l'annotation du format
     * @throws SecurityException
     * @throws NoSuchMethodException
     */
    private T getFormatMethodAnnotation(Object base, String property) throws NoSuchMethodException
    {
        if (base != null && property != null)
        {
            Method method = base.getClass().getMethod("get" + StringUtils.capitalize(property));
            return method.getAnnotation(annotationType);
        }
        else
        {
            return null;
        }
    }

    /**
     * (methode de remplacement) {@inheritDoc}
     * 
     * @see javax.el.ELResolver#getCommonPropertyType(javax.el.ELContext, java.lang.Object)
     */
    @Override
    public Class<?> getCommonPropertyType(ELContext context, Object base)
    {
        return null;
    }

    /**
     * (methode de remplacement) {@inheritDoc}
     * 
     * @see javax.el.ELResolver#getFeatureDescriptors(javax.el.ELContext, java.lang.Object)
     */
    @Override
    public Iterator<FeatureDescriptor> getFeatureDescriptors(ELContext context, Object base)
    {
        return null;
    }

    /**
     * (methode de remplacement) {@inheritDoc}
     * 
     * @see javax.el.ELResolver#getType(javax.el.ELContext, java.lang.Object, java.lang.Object)
     */
    @Override
    public Class<?> getType(ELContext context, Object base, Object property)
    {
        return null;
    }

    /**
     * (methode de remplacement) {@inheritDoc}
     * 
     * @see javax.el.ELResolver#isReadOnly(javax.el.ELContext, java.lang.Object, java.lang.Object)
     */
    @Override
    public boolean isReadOnly(ELContext context, Object base, Object property)
    {
        return true;
    }

    /**
     * (methode de remplacement) {@inheritDoc}
     * 
     * @see javax.el.ELResolver#setValue(javax.el.ELContext, java.lang.Object, java.lang.Object, java.lang.Object)
     */
    @Override
    public void setValue(ELContext context, Object base, Object property, Object value)
    {
        /**
         * pas de code à exécuter
         */
    }

}
