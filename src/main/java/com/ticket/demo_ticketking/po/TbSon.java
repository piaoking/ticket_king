package com.ticket.demo_ticketking.po;


public class TbSon {

  private long sonId;
  private long parentId;
  private String sonName;


  public long getSonId() {
    return sonId;
  }

  public void setSonId(long sonId) {
    this.sonId = sonId;
  }


  public long getParentId() {
    return parentId;
  }

  public void setParentId(long parentId) {
    this.parentId = parentId;
  }


  public String getSonName() {
    return sonName;
  }

  public void setSonName(String sonName) {
    this.sonName = sonName;
  }

}
