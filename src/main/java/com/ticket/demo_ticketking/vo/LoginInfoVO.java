package com.ticket.demo_ticketking.vo;

public class LoginInfoVO {

    private String userTel;
    private long userId;
    private String userPassword;
    private String verification;//验证码

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getUserTel() {
        return userTel;
    }

    public void setUserTel(String userTel) {
        this.userTel = userTel;
    }

    public String getVerification() {
        return verification;
    }

    public void setVerification(String verification) {
        this.verification = verification;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    @Override
    public String toString() {
        return "LoginInfoVO{" +
                "userTel='" + userTel + '\'' +
                ", verification='" + verification + '\'' +
                '}';
    }
}
