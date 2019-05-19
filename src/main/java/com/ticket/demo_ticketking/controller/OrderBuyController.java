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
    public String queryPrices(Model model){
        try {
            List<OrderBuyVO> orderBuyList = orderBuyService.queryPrice(35L, 3L);
            TbIntro tbIntro = orderBuyService.selectIntroAll(35L);
            model.addAttribute("orderBuyList",orderBuyList);
            model.addAttribute("tbIntro",tbIntro);
            return "goupiaopiao";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
