package com.ticket.demo_ticketking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/page")
public class PageController {

    @RequestMapping("/{page}")
    public String forwardPage(@PathVariable("page") String page){
        System.out.println("---->");
        return page;
    }
    @RequestMapping("/shifen")
    public String shifen(){
        return "shifenxianchang";
    }
    @RequestMapping("/faxian")
    public String faxian(){
        return "faxian";
    }
}
