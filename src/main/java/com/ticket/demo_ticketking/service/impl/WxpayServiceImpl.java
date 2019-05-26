package com.ticket.demo_ticketking.service.impl;

import com.github.wxpay.sdk.MyWXPayConfig;
import com.github.wxpay.sdk.WXPay;
import com.ticket.demo_ticketking.mapper.OrderMapper;
import com.ticket.demo_ticketking.mapper.UserMapper;
import com.ticket.demo_ticketking.po.TbOrder;
import com.ticket.demo_ticketking.po.TbUser;
import com.ticket.demo_ticketking.service.WxpayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class WxpayServiceImpl implements WxpayService {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private OrderMapper orderMapper;
    @Override
    public String orderWx(String orderNum, String orderTicketName, String baseURL) throws Exception {
        MyWXPayConfig payConfig = new MyWXPayConfig();
        try {
            WXPay wxPay = new WXPay(payConfig);
            //下单
            Map<String, String> data = new HashMap<String, String>();
            //商品名称
            data.put("body", orderTicketName); //商品标题
            //订单号：不能重复
            data.put("out_trade_no", orderNum);
            //web项目
            data.put("device_info", "WEB");
            //人民币
            data.put("fee_type", "CNY");
            //金额
            data.put("total_fee", "1");//单位是分
            //用户IP
            data.put("spbill_create_ip", "123.12.12.123");//终端IP地址
            //重点：回调地址，用来通知支付结果的地址
            data.put("notify_url", baseURL+"/ticketking/pay_notify_url");
            data.put("trade_type", "NATIVE");  // 此处指定为扫码支付
            data.put("product_id", "16");
            //返回值：下单成功之后的支付地址
            //下单，下单完成之后，会返回一个支付短链接
            Map<String, String> order = wxPay.unifiedOrder(data);
            System.out.println(order.get("code_url"));

            //返回支付短链接
            return order.get("code_url");

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public void orderAfterPay(String orderNum, Long userId) throws Exception {
        //扣除冻结的金额
        userMapper.kouFrozenMoney(0L,userId);
        //修改订单状态
        orderMapper.updateOrderStatus(orderNum);
    }

    @Override
    public String order(TbOrder tbOrder, String baseURL, Long userId) throws Exception {
        TbUser tbUser = userMapper.queryBalanceById(userId);
        long userBalance = tbUser.getUserBalance();
        //计算微信应该付多少钱
        long i =  tbOrder.getOrderPrice() - userBalance;
        if (i>0){
            userMapper.frozenMoney(userBalance,userId);
            String url = orderWx(tbOrder.getOrderNum(),tbOrder.getOrderTicketName() ,baseURL);
            return url;
        }else {
            //余额直接付款
        }
        return null;
    }
}
