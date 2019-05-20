package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.service.BuyTicketService;
import com.ticket.demo_ticketking.service.OrderBuyService;
import com.ticket.demo_ticketking.vo.BuyTicketVO;
import com.ticket.demo_ticketking.vo.OrderBuyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/buyTicket")
public class BuyTicketController {
    @Autowired
    private BuyTicketService buyTicketService;
    @Autowired
    private OrderBuyService orderBuyService;
    @RequestMapping("/shoppingCar")
    public String queryBuyTicket(long userId, Model model){
        List<OrderBuyVO> orderBuyVOS = null;
        try {
            List<BuyTicketVO> buyTicketVOS = buyTicketService.queryBuyTicket(userId);
            orderBuyVOS = orderBuyService.queryPrice(35L, 3L);
            List<OrderBuyVO> orderBuyList = orderBuyService.queryPrice(35L, 3L);
            model.addAttribute("orderBuyList",orderBuyList);
            model.addAttribute("orderBuyVOS",orderBuyVOS);
            model.addAttribute("buyTicketVOS",buyTicketVOS);
            return "确认订单信息";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
