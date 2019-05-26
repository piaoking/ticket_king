package com.ticket.demo_ticketking.controller;


import com.ticket.demo_ticketking.po.TbOrder;
import com.ticket.demo_ticketking.service.AddOrderService;
import com.ticket.demo_ticketking.utils.IdGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;
@CrossOrigin
@Controller
@RequestMapping("/addOder")
public class AddOrderController {
    @Autowired
    private AddOrderService addOrderService;

    @RequestMapping("/insertOder")
    @ResponseBody
    public String inserIntoOrder(Long orderPrice, Long orderSum, String orderNum, String orderState, String orderTime, String orderTicketName, String orderTicketPlace, String orderTicketTime, String orderTicketImage, HttpSession session, Model model){
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String shijian = df.format(new Date());
        String dingdan = IdGenerator.getId();
        Long usersId = (Long) session.getAttribute("userId");
        TbOrder tbOrder = new TbOrder();
        tbOrder.setOrderPrice(orderPrice);
        tbOrder.setOrderSum(orderSum);
        tbOrder.setOrderNum(dingdan);
        tbOrder.setOrderState("未付款");
        tbOrder.setOrderTime(shijian);
        tbOrder.setOrderTicketPlace(orderTicketPlace);
        tbOrder.setOrderTicketTime(orderTicketTime);
        tbOrder.setOrderTicketName(orderTicketName);
        tbOrder.setOrderTicketImage(orderTicketImage);
        tbOrder.setUserId(usersId);
        try {
            addOrderService.inserIntoOrder(tbOrder);
            return dingdan;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
