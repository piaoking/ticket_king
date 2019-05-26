package com.ticket.demo_ticketking.controller;


import com.ticket.demo_ticketking.service.AddOrderService;
import com.ticket.demo_ticketking.utils.IdGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import java.text.SimpleDateFormat;
import java.util.Date;
@CrossOrigin
@Controller
@RequestMapping("/addOder")
public class AddOrderController {
    @Autowired
    private AddOrderService addOrderService;

    @RequestMapping("/insertOder")
    public String inserIntoOrder(Long orderPrice, Long orderSum, String orderNum, String orderState, String orderTime, String orderTicketName, String orderTicketPlace, String orderTicketTime, String orderTicketImage, Long userId){
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String shijian = df.format(new Date());
        String dingdan = IdGenerator.getId();
        try {
            addOrderService.inserIntoOrder(orderPrice,orderSum,dingdan,"未付款",shijian,orderTicketName,orderTicketPlace,orderTicketTime,orderTicketImage,1L);
            return "yinsi";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
