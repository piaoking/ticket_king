package com.ticket.demo_ticketking.po;


public class TbOrder {

  private long orderId;
  private long orderPrice;
  private long orderSum;
  private String orderNum;
  private String orderState;
  private java.sql.Date orderTime;
  private String orderTicketName;
  private String orderTicketCity;
  private String orderTicketPlace;
  private String orderTicketTime;
  private String orderTicketImage;
  private long userId;


  public long getOrderId() {
    return orderId;
  }

  public void setOrderId(long orderId) {
    this.orderId = orderId;
  }


  public long getOrderPrice() {
    return orderPrice;
  }

  public void setOrderPrice(long orderPrice) {
    this.orderPrice = orderPrice;
  }


  public long getOrderSum() {
    return orderSum;
  }

  public void setOrderSum(long orderSum) {
    this.orderSum = orderSum;
  }


  public String getOrderNum() {
    return orderNum;
  }

  public void setOrderNum(String orderNum) {
    this.orderNum = orderNum;
  }


  public String getOrderState() {
    return orderState;
  }

  public void setOrderState(String orderState) {
    this.orderState = orderState;
  }


  public java.sql.Date getOrderTime() {
    return orderTime;
  }

  public void setOrderTime(java.sql.Date orderTime) {
    this.orderTime = orderTime;
  }


  public String getOrderTicketName() {
    return orderTicketName;
  }

  public void setOrderTicketName(String orderTicketName) {
    this.orderTicketName = orderTicketName;
  }


  public String getOrderTicketCity() {
    return orderTicketCity;
  }

  public void setOrderTicketCity(String orderTicketCity) {
    this.orderTicketCity = orderTicketCity;
  }


  public String getOrderTicketPlace() {
    return orderTicketPlace;
  }

  public void setOrderTicketPlace(String orderTicketPlace) {
    this.orderTicketPlace = orderTicketPlace;
  }


  public String getOrderTicketTime() {
    return orderTicketTime;
  }

  public void setOrderTicketTime(String orderTicketTime) {
    this.orderTicketTime = orderTicketTime;
  }


  public String getOrderTicketImage() {
    return orderTicketImage;
  }

  public void setOrderTicketImage(String orderTicketImage) {
    this.orderTicketImage = orderTicketImage;
  }


  public long getUserId() {
    return userId;
  }

  public void setUserId(long userId) {
    this.userId = userId;
  }

}
