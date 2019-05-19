package com.ticket.demo_ticketking.po;


public class TbAdd {

  private long addId;
  private long userId;
  private String addAdd;

  @Override
  public String toString() {
    return "TbAdd{" +
            "addId=" + addId +
            ", userId=" + userId +
            ", addAdd='" + addAdd + '\'' +
            '}';
  }

  public long getAddId() {
    return addId;
  }

  public void setAddId(long addId) {
    this.addId = addId;
  }


  public long getUserId() {
    return userId;
  }

  public void setUserId(long userId) {
    this.userId = userId;
  }


  public String getAddAdd() {
    return addAdd;
  }

  public void setAddAdd(String addAdd) {
    this.addAdd = addAdd;
  }

}
