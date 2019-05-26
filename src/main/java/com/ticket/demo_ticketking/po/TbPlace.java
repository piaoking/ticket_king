package com.ticket.demo_ticketking.po;


public class TbPlace {

  private long placeId;
  private String placeName;
  private String placeSeat;
  private String placeAdd;

  @Override
  public String toString() {
    return "TbPlace{" +
            "placeId=" + placeId +
            ", placeName='" + placeName + '\'' +
            ", placeSeat='" + placeSeat + '\'' +
            ", placeAdd='" + placeAdd + '\'' +
            '}';
  }

  public long getPlaceId() {
    return placeId;
  }

  public void setPlaceId(long placeId) {
    this.placeId = placeId;
  }


  public String getPlaceName() {
    return placeName;
  }

  public void setPlaceName(String placeName) {
    this.placeName = placeName;
  }


  public String getPlaceSeat() {
    return placeSeat;
  }

  public void setPlaceSeat(String placeSeat) {
    this.placeSeat = placeSeat;
  }


  public String getPlaceAdd() {
    return placeAdd;
  }

  public void setPlaceAdd(String placeAdd) {
    this.placeAdd = placeAdd;
  }

}
