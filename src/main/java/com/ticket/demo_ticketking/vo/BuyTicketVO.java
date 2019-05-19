package com.ticket.demo_ticketking.vo;

public class BuyTicketVO {
    private long userId;
    private String addAdd;
    private String userTel;

    @Override
    public String toString() {
        return "buyTicketVO{" +
                "userId=" + userId +
                ", addAdd='" + addAdd + '\'' +
                ", userTel='" + userTel + '\'' +
                '}';
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

    public String getUserTel() {
        return userTel;
    }

    public void setUserTel(String userTel) {
        this.userTel = userTel;
    }
}
