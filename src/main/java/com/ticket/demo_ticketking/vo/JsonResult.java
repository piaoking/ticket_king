package com.ticket.demo_ticketking.vo;

public class JsonResult {

    private Integer code;
    private String msg;

    public JsonResult(){}

    public JsonResult(Integer code,String msg){
        this.code=code;
        this.msg=msg;
    }

    public static JsonResult ok(){
        return new JsonResult(1,"");
    }

    public static JsonResult ok(String msg){
        return new JsonResult(1,msg);
    }

    public static JsonResult fail(String msg){
        return new JsonResult(0,msg);
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "JsonResult{" +
                "code=" + code +
                ", msg='" + msg + '\'' +
                '}';
    }
}
