package com.ticket.demo_ticketking.po;


public class TbIntro {

  private long introId;
  private long ticketId;
  private String introDetails;
  private String introImage;


  public long getIntroId() {
    return introId;
  }

  public void setIntroId(long introId) {
    this.introId = introId;
  }


  public long getTicketId() {
    return ticketId;
  }

  public void setTicketId(long ticketId) {
    this.ticketId = ticketId;
  }


  public String getIntroDetails() {
    return introDetails;
  }

  public void setIntroDetails(String introDetails) {
    this.introDetails = introDetails;
  }


  public String getIntroImage() {
    return introImage;
  }

  public void setIntroImage(String introImage) {
    this.introImage = introImage;
  }

}
