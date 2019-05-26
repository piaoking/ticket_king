package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbPrice;
import com.ticket.demo_ticketking.po.TbSession;
import com.ticket.demo_ticketking.service.IPriceService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.xml.ws.Action;
import java.util.List;

@Controller
@RequestMapping("/price")
public class PriceController {
    @Autowired
    private IPriceService iPriceService;
    @RequestMapping("/pr")
    public String queryPrice(Model model){
        List<TbPrice> tbPrices = iPriceService.queryPrice();
        model.addAttribute("tbPrices",tbPrices);
        return "price";
    }
    @RequestMapping("/prices")
    @ResponseBody
    public JsonResult saveSee(TbPrice tbPrice){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbPrice){
            iPriceService.savePrice(tbPrice);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;

    }

    @RequestMapping("/priceById/{priceId}")
    public String queryshowId(@PathVariable("priceId") Integer priceId, Model model) throws Exception {
        System.out.println("sssss");
        TbPrice tbPrice = iPriceService.queryPriceById(priceId);
        model.addAttribute("priceupdate",tbPrice);
        return "priceupdate";
    }

    /**
     * 更新
     * @param
     * @return
     * @throws Exception
     */
    @RequestMapping("/updateprice")
    @ResponseBody
    public  JsonResult updateprice(TbPrice tbPrice) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbPrice){
            iPriceService.updatePrice(tbPrice);
            System.out.println("---->"+tbPrice.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }
}
