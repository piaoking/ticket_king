package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbStar;
import com.ticket.demo_ticketking.service.StarService;
import com.ticket.demo_ticketking.vo.PageSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
@Controller
@RequestMapping("/star")
public class StarController {
    @Autowired
    private StarService starService;
    @RequestMapping("/starindex1")
    public String queryStar(Model model){
        int index1 = PageSize.SIZE1;
        int index2 = PageSize.SIZE2;
        int index3 = PageSize.SIZE3;
        int index4 = PageSize.SIZE4;
        try {
            List<TbStar> tbStars = starService.selectStar(index1, index2);
            model.addAttribute("tbStars",tbStars);
            List<TbStar> tbStars1 = starService.selectStar(index3, index4);
            model.addAttribute("tbStars1",tbStars1);
            return "yiren";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
