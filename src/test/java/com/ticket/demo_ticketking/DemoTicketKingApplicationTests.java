package com.ticket.demo_ticketking;


import com.ticket.demo_ticketking.po.TbIntro;
import com.ticket.demo_ticketking.po.TbUser;
import com.ticket.demo_ticketking.service.AddOrderService;
import com.ticket.demo_ticketking.service.IUserService;
import com.ticket.demo_ticketking.service.OrderBuyService;
import com.ticket.demo_ticketking.utils.IdGenerator;
import com.ticket.demo_ticketking.vo.OrderBuyVO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoTicketKingApplicationTests {
    @Autowired
    private OrderBuyService orderBuyService;
    @Autowired
    private IUserService iUserService;
    @Autowired
    private AddOrderService addOrderService;
    @Test
    public void contextLoads() {
    }
    @Test
    public void test1() throws Exception {
        List<OrderBuyVO> orderBuyVOS = orderBuyService.queryPrice(80, 3);
        System.out.println(orderBuyVOS);
    }

    @Test
    public void test2(){
        TbUser query = null;
        try {
            query = iUserService.query(1);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println(query);

    }
    @Test
    public void test3(){
        TbIntro tbIntro = null;
        try {
            tbIntro = orderBuyService.selectIntroAll(35);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println(tbIntro);
    }

    @Test
    public void test4(){
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String shijian = df.format(new Date());
        String dingdan = IdGenerator.getId();
        try {
            addOrderService.inserIntoOrder(100,1,dingdan,"未付款",shijian,"你是谁","武汉市江夏区","1997-8-10","3-2.jpg",1);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
