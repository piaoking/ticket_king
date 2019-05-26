package com.ticket.demo_ticketking.vo;

public class Ticket {
    private int cityId;
    private String cityName;
    private String parentName;
    private int parentNum;
    private String ticketName;
    private String ticketImage;
    private int ticketPricemin;
    private String placeName;
    private String showTime;
    private int focusNum;
    private String sonName;
    private int showId;
    private int ticketZan;
    private int ticketId;
    private String textByName;

    public int getTicketId() {
        return ticketId;
    }

    public void setTicketId(int ticketId) {
        this.ticketId = ticketId;
    }

    public String getTextByName() {
        return textByName;
    }

    public void setTextByName(String textByName) {
        this.textByName = textByName;
    }

    public int getTicketZan() {
        return ticketZan;
    }

    public void setTicketZan(int ticketZan) {
        this.ticketZan = ticketZan;
    }

    public int getShowId() {
        return showId;
    }

    public void setShowId(int showId) {
        this.showId = showId;
    }

    public int getCityId() {
        return cityId;
    }

    public void setCityId(int cityId) {
        this.cityId = cityId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getParentName() {
        return parentName;
    }

    public void setParentName(String parentName) {
        this.parentName = parentName;
    }

    public int getParentNum() {
        return parentNum;
    }

    public void setParentNum(int parentNum) {
        this.parentNum = parentNum;
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

    public int getTicketPricemin() {
        return ticketPricemin;
    }

    public void setTicketPricemin(int ticketPricemin) {
        this.ticketPricemin = ticketPricemin;
    }

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public String getShowTime() {
        return showTime;
    }

    public void setShowTime(String showTime) {
        this.showTime = showTime;
    }

    public int getFocusNum() {
        return focusNum;
    }

    public void setFocusNum(int focusNum) {
        this.focusNum = focusNum;
    }

    public String getSonName() {
        return sonName;
    }

    public void setSonName(String sonName) {
        this.sonName = sonName;
    }
}
