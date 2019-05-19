package com.ticket.demo_ticketking.po;


public class TbUser {

  private long userId;
  private String userName;
  private String userTel;
  private String userPassword;
  private long userBalance;
  private String userPs;
  private String userCoupon;
  private String userImage;
  private long userLv;

  @Override
  public String toString() {
    return "TbUser{" +
            "userId=" + userId +
            ", userName='" + userName + '\'' +
            ", userTel='" + userTel + '\'' +
            ", userPassword='" + userPassword + '\'' +
            ", userBalance=" + userBalance +
            ", userPs='" + userPs + '\'' +
            ", userCoupon='" + userCoupon + '\'' +
            ", userImage='" + userImage + '\'' +
            ", userLv=" + userLv +
            '}';
  }

  public long getUserId() {
    return userId;
  }

  public void setUserId(long userId) {
    this.userId = userId;
  }


  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }


  public String getUserTel() {
    return userTel;
  }

  public void setUserTel(String userTel) {
    this.userTel = userTel;
  }


  public String getUserPassword() {
    return userPassword;
  }

  public void setUserPassword(String userPassword) {
    this.userPassword = userPassword;
  }


  public long getUserBalance() {
    return userBalance;
  }

  public void setUserBalance(long userBalance) {
    this.userBalance = userBalance;
  }


  public String getUserPs() {
    return userPs;
  }

  public void setUserPs(String userPs) {
    this.userPs = userPs;
  }


  public String getUserCoupon() {
    return userCoupon;
  }

  public void setUserCoupon(String userCoupon) {
    this.userCoupon = userCoupon;
  }


  public String getUserImage() {
    return userImage;
  }

  public void setUserImage(String userImage) {
    this.userImage = userImage;
  }


  public long getUserLv() {
    return userLv;
  }

  public void setUserLv(long userLv) {
    this.userLv = userLv;
  }

}
