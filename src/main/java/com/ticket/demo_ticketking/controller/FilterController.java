package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.vo.Ticket;
import com.ticket.demo_ticketking.po.TbCity;
import com.ticket.demo_ticketking.po.TbParent;
import com.ticket.demo_ticketking.service.CityService;
import com.ticket.demo_ticketking.service.ParentService;
import com.ticket.demo_ticketking.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/fiter")
public class FilterController {

    @Autowired
    private CityService cityService;

    @Autowired
    private ParentService parentService;

    @Autowired
    private TicketService ticketService;

    @ResponseBody
    @RequestMapping(value = "/city",method = RequestMethod.GET)
    public List<TbCity> queryCity() throws Exception{
        List<TbCity> city_list = cityService.queryCity();
        return city_list;
    }

    @ResponseBody
    @RequestMapping(value = "/cityById/{cityId}",method = RequestMethod.GET)
    public TbCity queryCityById(@PathVariable("cityId") Integer cityId) throws Exception{
        TbCity city = cityService.queryCityById(cityId);
        return city;
    }

    @ResponseBody
    @RequestMapping(value = "/parent",method = RequestMethod.GET)
    public List<TbParent> queryParent() throws Exception{
        List<TbParent> parent_list = parentService.queryParent();
        return parent_list;
    }


    @ResponseBody
    @RequestMapping(value = "ticket/{cityId}/{parentId}/{showId}/{zan}/{num}/{price}/{pricemin}/{ticketName}",method = RequestMethod.POST)
    public List<Ticket> queryTicket(@PathVariable("cityId") Integer cityId,
                                    @PathVariable("parentId") Integer parentId,
                                    @PathVariable("showId") Integer showId,
                                    @PathVariable("zan") Integer zan,
                                    @PathVariable("num") Integer num,
                                    @PathVariable("price") Integer price,
                                    @PathVariable("pricemin") Integer pricemin,
                                    @PathVariable("ticketName") String ticketName) throws Exception {
        List<Ticket> tickets = ticketService.queryTicket(cityId,showId,parentId,zan,num,price,pricemin,ticketName);
        return tickets;
    }

    @ResponseBody
    @RequestMapping(value = "ticketByFour/{cityId}/{parentId}/{showId}",method = RequestMethod.GET)
    public List<Ticket> queryByFour(@PathVariable("cityId") Integer cityId,
                                    @PathVariable("parentId") Integer parentId,
                                    @PathVariable("showId") Integer showId) throws Exception {
        List<Ticket> ticketList = ticketService.queryByFour(cityId, showId, parentId);
        return ticketList;
    }
}
