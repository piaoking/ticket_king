package com.ticket.demo_ticketking.po;


public class TbSession {

  private long sessionId;
  private long ticketId;
  private String sessionTime;
  private String sessionChoice;


  public long getSessionId() {
    return sessionId;
  }

  public void setSessionId(long sessionId) {
    this.sessionId = sessionId;
  }


  public long getTicketId() {
    return ticketId;
  }

  public void setTicketId(long ticketId) {
    this.ticketId = ticketId;
  }


  public String getSessionTime() {
    return sessionTime;
  }

  public void setSessionTime(String sessionTime) {
    this.sessionTime = sessionTime;
  }


  public String getSessionChoice() {
    return sessionChoice;
  }

  public void setSessionChoice(String sessionChoice) {
    this.sessionChoice = sessionChoice;
  }

}
