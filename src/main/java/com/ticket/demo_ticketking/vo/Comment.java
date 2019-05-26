package com.ticket.demo_ticketking.vo;

import java.sql.Date;

public class Comment {

    private int commentId;
    private String commentDetails;
    private int commentZan;
    private Date commentTime;
    private String commentImage;
    private String starName;
    private int starId;
    private String starImage;
    private String ticketName;
    private String ticketImage;
    private String commentName;

    public String getCommentName() {
        return commentName;
    }

    public void setCommentName(String commentName) {
        this.commentName = commentName;
    }

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getCommentDetails() {
        return commentDetails;
    }

    public void setCommentDetails(String commentDetails) {
        this.commentDetails = commentDetails;
    }

    public int getCommentZan() {
        return commentZan;
    }

    public void setCommentZan(int commentZan) {
        this.commentZan = commentZan;
    }

    public Date getCommentTime() {
        return commentTime;
    }

    public void setCommentTime(Date commentTime) {
        this.commentTime = commentTime;
    }

    public String getCommentImage() {
        return commentImage;
    }

    public void setCommentImage(String commentImage) {
        this.commentImage = commentImage;
    }

    public String getStarName() {
        return starName;
    }

    public void setStarName(String starName) {
        this.starName = starName;
    }

    public int getStarId() {
        return starId;
    }

    public void setStarId(int starId) {
        this.starId = starId;
    }

    public String getStarImage() {
        return starImage;
    }

    public void setStarImage(String starImage) {
        this.starImage = starImage;
    }

    public String getTicketName() {
        return ticketName;
    }

    public void setTicketName(String ticketName) {
        this.ticketName = ticketName;
    }

    public String getTicketImage() {
        return ticketImage;
    }

    public void setTicketImage(String ticketImage) {
        this.ticketImage = ticketImage;
    }
}
