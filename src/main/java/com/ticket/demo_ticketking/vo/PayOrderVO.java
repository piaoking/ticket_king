package com.ticket.demo_ticketking.vo;

public class PayOrderVO {
    private long orderId;
    private String orderNum;
    private long orderPrice;
    private String orderTicketName;
    private String userName;
    private String userTel;
    private String addAdd;

    @Override
    public String toString() {
        return "PayOrderVO{" +
                "orderId=" + orderId +
                ", orderNum='" + orderNum + '\'' +
                ", orderPrice=" + orderPrice +
                ", orderTicketName='" + orderTicketName + '\'' +
                ", userName='" + userName + '\'' +
                ", userTel='" + userTel + '\'' +
                ", addAdd='" + addAdd + '\'' +
                '}';
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public String getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum;
    }

    public long getOrderPrice() {
        return orderPrice;
    }

    public void setOrderPrice(long orderPrice) {
        this.orderPrice = orderPrice;
    }

    public String getOrderTicketName() {
        return orderTicketName;
    }

    public void setOrderTicketName(String orderTicketName) {
        this.orderTicketName = orderTicketName;
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

    public String getAddAdd() {
        return addAdd;
    }

    public void setAddAdd(String addAdd) {
        this.addAdd = addAdd;
    }
}
