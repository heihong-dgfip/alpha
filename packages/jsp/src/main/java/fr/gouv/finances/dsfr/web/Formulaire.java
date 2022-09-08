package fr.gouv.finances.dsfr.web;

public final class Formulaire
{
  private String email;

  private String message;

  public Formulaire()
  {
    /** rien à initialiser */
  }

  public String getEmail()
  {
    return email;
  }

  public void setEmail(String email)
  {
    this.email = email;
  }

  public String getMessage()
  {
    return message;
  }

  public void setMessage(String message)
  {
    this.message = message;
  }

}
