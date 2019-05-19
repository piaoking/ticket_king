package com.ticket.demo_ticketking.po;


public class TbComment {

  private long commentId;
  private long ticketId;
  private String commentDetails;
  private long commentZan;
  private java.sql.Date commentTime;
  private String commentImage;
  private String commentStar;


  public long getCommentId() {
    return commentId;
  }

  public void setCommentId(long commentId) {
    this.commentId = commentId;
  }


  public long getTicketId() {
    return ticketId;
  }

  public void setTicketId(long ticketId) {
    this.ticketId = ticketId;
  }


  public String getCommentDetails() {
    return commentDetails;
  }

  public void setCommentDetails(String commentDetails) {
    this.commentDetails = commentDetails;
  }


  public long getCommentZan() {
    return commentZan;
  }

  public void setCommentZan(long commentZan) {
    this.commentZan = commentZan;
  }


  public java.sql.Date getCommentTime() {
    return commentTime;
  }

  public void setCommentTime(java.sql.Date commentTime) {
    this.commentTime = commentTime;
  }


  public String getCommentImage() {
    return commentImage;
  }

  public void setCommentImage(String commentImage) {
    this.commentImage = commentImage;
  }


  public String getCommentStar() {
    return commentStar;
  }

  public void setCommentStar(String commentStar) {
    this.commentStar = commentStar;
  }

}
