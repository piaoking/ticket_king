package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.service.BuyTicketService;
import com.ticket.demo_ticketking.service.OrderBuyService;
import com.ticket.demo_ticketking.service.PayOrderService;
import com.ticket.demo_ticketking.vo.BuyTicketVO;
import com.ticket.demo_ticketking.vo.OrderBuyVO;
import com.ticket.demo_ticketking.vo.PayOrderVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/buyTicket")
public class BuyTicketController {
    @Autowired
    private BuyTicketService buyTicketService;
    @Autowired
    private OrderBuyService orderBuyService;
    @Autowired
    private PayOrderService payOrderService;
    @RequestMapping("/shoppingCar")
    public String queryBuyTicket(HttpSession session, Long ticketId, Long showId, Model model){
        List<OrderBuyVO> orderBuyVOS = null;
        Long usersId = (Long) session.getAttribute("userId");
        try {
            List<BuyTicketVO> buyTicketVOS = buyTicketService.queryBuyTicket(usersId);
            orderBuyVOS = orderBuyService.queryPrice(ticketId, showId);
            List<OrderBuyVO> orderBuyList = orderBuyService.queryPrice(ticketId, showId);
            model.addAttribute("orderBuyList",orderBuyList);
            model.addAttribute("orderBuyVOS",orderBuyVOS);
            model.addAttribute("buyTicketVOS",buyTicketVOS);
            return "确认订单信息";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @RequestMapping("/payOrder")
    public String payOrder(String orderNum,Model model){
        try {
            PayOrderVO payOrderVO = payOrderService.payOrder(orderNum);
            System.out.println(payOrderVO);
            model.addAttribute("payOrderVO",payOrderVO);
            return "支付订单";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
