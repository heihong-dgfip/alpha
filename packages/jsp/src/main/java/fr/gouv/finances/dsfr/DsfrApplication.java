/*
 * Copyright (c) 2020 DGFiP - Tous droits réservés
 */
package fr.gouv.finances.dsfr;

import java.util.ArrayList;
import java.util.Collection;

import javax.servlet.descriptor.JspConfigDescriptor;
import javax.servlet.descriptor.JspPropertyGroupDescriptor;
import javax.servlet.descriptor.TaglibDescriptor;

import org.apache.tomcat.util.descriptor.web.JspConfigDescriptorImpl;
import org.apache.tomcat.util.descriptor.web.JspPropertyGroup;
import org.apache.tomcat.util.descriptor.web.JspPropertyGroupDescriptorImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

/**
 * Classe principale de l'application.
 */
@SpringBootApplication
public class DsfrApplication extends SpringBootServletInitializer
{

    /**
     * Instanciation de inea application.
     */
    public DsfrApplication()
    {
        super();
    }

    /**
     * Point d'entrée de l'application.
     *
     * @param args Arguments passés à l'application
     */
    public static void main(String[] args)
    {
        SpringApplication.run(DsfrApplication.class, args);
    }

    /**
     * Configuration de la servlet, correspond au web.xml.
     * 
     * Configuration de l'encodage en utf-8 pour les JSP.
     *
     * @return Configuration de la servlet
     */
    @Bean
    public EmbeddedServletContainerCustomizer customizeEmbeddedServletContainerCustomizer()
    {
        return container -> {
            if (container instanceof TomcatEmbeddedServletContainerFactory)
            {
                /** Tomcat factory */
                final TomcatEmbeddedServletContainerFactory tomcatFactory =
                    (TomcatEmbeddedServletContainerFactory) container;

                /** ajouter configuration JSP au context */
                tomcatFactory.addContextCustomizers(context -> {
                    /** configuration des JSP */
                    final Collection<JspPropertyGroupDescriptor> jspPropertyGroups = new ArrayList<>();
                    /** configuration des tags */
                    final Collection<TaglibDescriptor> taglibs = new ArrayList<>();

                    /** ajout descripteur pour l'encoding au groupe */
                    final JspPropertyGroupDescriptor descriptor = new JspPropertyGroupDescriptorImpl(utf8EncodingJspGroup());
                    jspPropertyGroups.add(descriptor);

                    final JspConfigDescriptor jspConfigDescriptor = new JspConfigDescriptorImpl(jspPropertyGroups, taglibs);

                    /** ajout descripteur au contexte */
                    context.setJspConfigDescriptor(jspConfigDescriptor);
                });
            }
        };
    }

    /**
     * Configuration de l'encoding des pages JSP en utf-8.
     * L'encoding des tags n'est pas pris en compte et doit être spécifié dans la directive tag.
     *
     * @return configuration JSP
     */
    private JspPropertyGroup utf8EncodingJspGroup()
    {
        final JspPropertyGroup group = new JspPropertyGroup();
        /** page JSP */
        group.addUrlPattern("*.jsp");
        /** Fragment de page JSP */
        group.addUrlPattern("*.jspf");
        /** Fragment de tag */
        group.addUrlPattern("*.tagf");
        /** encoding utf-8 pour toutes ces pages */
        group.setPageEncoding("UTF-8");
        return group;
    }

}
