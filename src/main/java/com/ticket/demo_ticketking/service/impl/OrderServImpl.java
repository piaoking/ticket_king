package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.OrderMappr;
import com.ticket.demo_ticketking.po.TbOrder;
import com.ticket.demo_ticketking.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServImpl implements IOrderService {
    @Autowired
    private OrderMappr orderMappr;
    @Override
    public List<TbOrder> queryOrder() {
        List<TbOrder> tbOrders = orderMappr.queryOrder();
        return tbOrders;
    }

    @Override
    public void savaOrder(TbOrder tbOrder) {
        orderMappr.savaOrder(tbOrder);
    }

    @Override
    public TbOrder queryOrderById(Integer orderId) {
        TbOrder tbOrder = orderMappr.queryOrderById(orderId);
        return tbOrder;
    }

    @Override
    public void updateOrder(TbOrder tbOrder)throws Exception {
        if(null!=tbOrder){
            orderMappr.updateOrder(tbOrder);
        }else{
            throw new UserIdNotFoundException();
        }
    }
}
