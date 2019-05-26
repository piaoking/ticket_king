package com.ticket.demo_ticketking.vo;

public class OrderBuyVO {
    private long ticketId;
    private long placeId;
    private String ticketName;
    private String placeName;
    private long showId;
    private String showTime;
    private long price;
    private String ticketImage;

    public long getPlaceId() {
        return placeId;
    }

    public void setPlaceId(long placeId) {
        this.placeId = placeId;
    }

    public String getTicketImage() {
        return ticketImage;
    }

    public void setTicketImage(String ticketImage) {
        this.ticketImage = ticketImage;
    }

    @Override
    public String toString() {
        return "OrderBuyVO{" +
                "ticketId=" + ticketId +
                ", placeId=" + placeId +
                ", ticketName='" + ticketName + '\'' +
                ", placeName='" + placeName + '\'' +
                ", showId=" + showId +
                ", showTime='" + showTime + '\'' +
                ", price=" + price +
                ", ticketImage='" + ticketImage + '\'' +
                '}';
    }

    public long getTicketId() {
        return ticketId;
    }

    public void setTicketId(long ticketId) {
        this.ticketId = ticketId;
    }

    public String getTicketName() {
        return ticketName;
    }

    public void setTicketName(String ticketName) {
        this.ticketName = ticketName;
    }

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public long getShowId() {
        return showId;
    }

    public void setShowId(long showId) {
        this.showId = showId;
    }

    public String getShowTime() {
        return showTime;
    }

    public void setShowTime(String showTime) {
        this.showTime = showTime;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }
}
