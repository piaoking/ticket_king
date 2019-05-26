package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.IOrdersMapper;
import com.ticket.demo_ticketking.po.TbOrder;
import com.ticket.demo_ticketking.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersServiceImpl  implements IOrderService {
    @Autowired
    private IOrdersMapper ordersMapper;

    @Override
    public List<TbOrder> queryOrder() {
        List<TbOrder> tbOrders = ordersMapper.queryOrder();
        return tbOrders;
    }

    @Override
    public void savaOrder(TbOrder tbOrder) {
        ordersMapper.savaOrder(tbOrder);
    }

    @Override
    public TbOrder queryOrderById(Integer orderId) {
        TbOrder tbOrder = ordersMapper.queryOrderById(orderId);
        return tbOrder;
    }

    @Override
    public void updateOrder(TbOrder tbOrder) throws Exception {
        if(null!=tbOrder){
            ordersMapper.updateOrder(tbOrder);
        }else{
            throw new UserIdNotFoundException();
        }
    }
}
