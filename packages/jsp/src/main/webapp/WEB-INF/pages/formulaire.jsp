<%@ include file="/WEB-INF/includes.tagf"%>
<%@ taglib prefix="app" tagdir="/WEB-INF/tags/app"%>

<app:page title="Web Components DGFIP">
    <main role="main" id="main">
        <fr-container>
            <fr-grid-row>
                <fr-col>
                    <h1>Web Components DGFIP</h1>
                    <h2>Pourquoi ?</h2>
                    <fr-accordion title="Notre objectif" title-type="h2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
                        amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
                        congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
                        sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
                        Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent
                        blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas
                        adipiscing ante non diam sodales hendrerit.</p>
                    </fr-accordion>
                    <fr-accordion title="Modalités d'applications" title-type="h2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
                        amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
                        congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
                        sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
                        Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent
                        blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas
                        adipiscing ante non diam sodales hendrerit.</p>
                    </fr-accordion>
                    <h2>Nous contacter</h2>
                    <fr-form>
                    <form:form modelAttribute="formulaire">
                        <spring:bind path="email">
                            <fr-input label="Email">
                              <form:input slot="native" path="email" type="text"></form:input>
                                <c:if test="${status.error}">
                                  <fr-error-text>${status.getErrorMessagesAsString('<br>')}</fr-error-text>
                                </c:if>
                            </fr-input>
                        </spring:bind>
                        <spring:bind path="message">
                            <fr-input label="Message">
                              <form:input slot="native" path="message" type="text"></form:input>
                              <c:if test="${status.error}">
                                <fr-error-text>${status.getErrorMessagesAsString('<br>')}</fr-error-text>
                              </c:if>
                            </fr-input>
                        </spring:bind>
                        <fr-btn type="submit">Envoyer</fr-btn>
                    </form:form>
                    </fr-form>
                </fr-col>
            </fr-grid-row>
        </fr-container>
    </main>
</app:page>