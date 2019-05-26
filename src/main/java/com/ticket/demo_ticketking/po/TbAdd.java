package com.ticket.demo_ticketking.po;


public class TbAdd {

  private long addId;
  private String addAdd;
  private long userId;


  public long getAddId() {
    return addId;
  }

  public void setAddId(long addId) {
    this.addId = addId;
  }


  public String getAddAdd() {
    return addAdd;
  }

  public void setAddAdd(String addAdd) {
    this.addAdd = addAdd;
  }


  public long getUserId() {
    return userId;
  }

  public void setUserId(long userId) {
    this.userId = userId;
  }

  @Override
  public String toString() {
    return "TbAdd{" +
            "addId=" + addId +
            ", addAdd='" + addAdd + '\'' +
            ", userId=" + userId +
            '}';
  }
}
