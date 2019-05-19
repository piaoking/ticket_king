package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.service.BuyTicketService;
import com.ticket.demo_ticketking.vo.BuyTicketVO;
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
    @RequestMapping("/shoppingCar")
    public String queryBuyTicket(long userId, Model model){
        try {
            List<BuyTicketVO> buyTicketVOS = buyTicketService.queryBuyTicket(userId);
            model.addAttribute("buyTicketVOS",buyTicketVOS);
            return "确认订单信息";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
