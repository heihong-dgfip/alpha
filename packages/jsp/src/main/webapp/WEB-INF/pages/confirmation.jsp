<%@ include file="/WEB-INF/includes.tagf"%>
<%@ taglib prefix="app" tagdir="/WEB-INF/tags/app"%>

<app:page title="Confirmation">
    <main role="main" id="main">
        <div class="fr-container">
            <div class="fr-grid-row">
                <div class="fr-col">
                    <h1>Confirmation</h1>
                    <p>Votre message a bien été envoyé.</p>
                    <dl>
                        <dt>Email:</dt>
                        <dd>${email}</dd>
                        <dt>Message:</dt>
                        <dd>${message}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </main>
</app:page>