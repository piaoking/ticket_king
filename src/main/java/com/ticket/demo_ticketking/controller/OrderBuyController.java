package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbIntro;
import com.ticket.demo_ticketking.service.OrderBuyService;
import com.ticket.demo_ticketking.vo.OrderBuyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("orderBuy")
public class OrderBuyController {
    @Autowired
    private OrderBuyService orderBuyService;
    @RequestMapping("ticketseat")
    public String queryPrices(Long ticketId, Long showId, Model model){
        try {
            List<OrderBuyVO> orderBuyList = orderBuyService.queryPrice(ticketId, showId);
            TbIntro tbIntro = orderBuyService.selectIntroAll(ticketId);
            model.addAttribute("orderBuyList",orderBuyList);
            System.out.println(orderBuyList);
            model.addAttribute("tbIntro",tbIntro);
            return "goupiaopiao";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
