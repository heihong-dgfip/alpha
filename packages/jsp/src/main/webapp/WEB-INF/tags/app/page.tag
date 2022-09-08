<%@ include file="/WEB-INF/includes.tagf"%>

<%@ tag pageEncoding="UTF-8" description="Page pour dsfr."%>
<%@ attribute name="title" required="true" description="Elément head->title"%>

<!DOCTYPE html>
<html lang="fr" dir="ltr">
<%@ include file="head.tagf"%>
<body>
  <fr-app>
    <jsp:doBody />
  </fr-app>
</body>

</html>