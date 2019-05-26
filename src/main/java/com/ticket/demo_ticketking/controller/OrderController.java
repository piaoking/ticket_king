package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbOrder;
import com.ticket.demo_ticketking.service.IOrderService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private IOrderService iOrderService;

    @RequestMapping("/to")
    public  String queryOrder(Model model){
        List<TbOrder> tbOrders = iOrderService.queryOrder();
        model.addAttribute("tbOrders",tbOrders);
        return "order";


    }
    @RequestMapping("/places")
    @ResponseBody
    public JsonResult saveSee(TbOrder tbOrder){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbOrder){
            iOrderService.savaOrder(tbOrder);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;

    }

    @RequestMapping("/orderById/{orderId}")
    public String queryshowId(@PathVariable("orderId") Integer orderId, Model model) throws Exception {
        System.out.println("sssss");
        TbOrder tbOrder = iOrderService.queryOrderById(orderId);
        model.addAttribute("orderupdate", tbOrder);
        return "orderupdate";
    }
    /**
     * 更新
     * @param
     * @return
     * @throws Exception
     */
    @RequestMapping("/updateorder")
    @ResponseBody
    public  JsonResult updateorder(TbOrder tbOrder ) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbOrder){
            iOrderService.updateOrder(tbOrder);
            System.out.println("---->"+tbOrder.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }
}
