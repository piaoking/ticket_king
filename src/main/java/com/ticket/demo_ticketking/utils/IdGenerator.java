package com.ticket.demo_ticketking.utils;

import java.util.Random;

public class IdGenerator {

	    /** 
	     * 生成主键(16位数字)
	     * 主键生成方式,年月日时分秒毫秒的时间戳+四位随机数保证不重复
	     */  
	    public static String getId() {
	    	//当前系统时间戳精确到毫秒
	    	Long simple=System.currentTimeMillis();
	    	//三位随机数
	    	int random=new Random().nextInt(10)+1;//为变量赋随机值1-9;
	        return simple.toString()+random;  
	    }  
	
}
